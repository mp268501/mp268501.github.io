(() => {
  const baseLetters = ['Z', 'A', 'B', 'C', 'D', 'E'];
  const letterSet = new Set(baseLetters);

  const empathyState = {
    attempts: 0,
    errors: 0,
    completed: {
      baseSix: false,
      fractions: false,
      relational: false,
      proportion: false,
    },
    progress: {
      baseSix: 'fresh',
      fractions: 'fresh',
      relational: 'fresh',
      proportion: 'fresh',
    },
    timers: {},
    timeSpent: {
      baseSix: 0,
      fractions: 0,
      relational: 0,
      proportion: 0,
    },
  };

  const statsNodes = {
    complete: document.getElementById('stat-complete'),
    attempts: document.getElementById('stat-attempts'),
    errors: document.getElementById('stat-errors'),
    time: document.getElementById('stat-time'),
  };

  function startTimer(exercise) {
    if (!empathyState.timers[exercise]) {
      empathyState.timers[exercise] = Date.now();
    }
  }

  function stopTimer(exercise) {
    if (empathyState.timers[exercise]) {
      empathyState.timeSpent[exercise] += Date.now() - empathyState.timers[exercise];
      delete empathyState.timers[exercise];
      updateStats();
    }
  }

  function formatDuration(ms) {
    const totalSeconds = Math.round(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    }
    return `${seconds}s`;
  }

  function updateStats() {
    if (!statsNodes.complete) {
      return;
    }
    const completedCount = Object.values(empathyState.completed).filter(Boolean).length;
    statsNodes.complete.textContent = `${completedCount} / 4`;
    statsNodes.attempts.textContent = empathyState.attempts;
    statsNodes.errors.textContent = empathyState.errors;
    let total = Object.values(empathyState.timeSpent).reduce((acc, value) => acc + value, 0);
    for (const key of Object.keys(empathyState.timers)) {
      total += Date.now() - empathyState.timers[key];
    }
    statsNodes.time.textContent = formatDuration(total);
  }

  function recordStatus(exercise, status, incorrectCount = 0) {
    const previous = empathyState.progress[exercise] || 'fresh';
    empathyState.progress[exercise] = status;

    if (status === 'passed') {
      if (previous === 'fresh' || previous === 'incomplete') {
        empathyState.attempts += 1;
      }
      empathyState.completed[exercise] = true;
      stopTimer(exercise);
    } else if (status === 'attempted') {
      if (previous === 'fresh' || previous === 'incomplete') {
        empathyState.attempts += 1;
      }
      empathyState.errors += incorrectCount;
    } else if (status === 'incomplete' && previous === 'fresh') {
      empathyState.completed[exercise] = false;
    }
    updateStats();
  }

  function sanitizeInput(input) {
    const raw = input.value.toUpperCase().replace(/[^A-Z]/g, '');
    if (raw !== input.value) {
      input.value = raw;
    }
    return raw;
  }

  function toggleMapping() {
    const toggleButton = document.querySelector('.toggle-mapping');
    const mapping = document.getElementById('digit-mapping');
    if (!toggleButton || !mapping) {
      return;
    }
    toggleButton.addEventListener('click', () => {
      const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', String(!expanded));
      if (expanded) {
        mapping.hidden = true;
        toggleButton.textContent = 'Show digit mapping';
      } else {
        mapping.hidden = false;
        toggleButton.textContent = 'Hide digit mapping';
      }
    });
  }

  function initBaseSixExercise() {
    const container = document.querySelector('[data-exercise="base-six"]');
    if (!container) {
      return;
    }

    const expected = {
      carries: ['', 'A', 'B', ''],
      rows: [
        ['', 'B', 'B', 'C'],
        ['A', 'C', 'D', ''],
      ],
      final: ['B', 'Z', 'Z', 'C'],
    };

    const inputs = Array.from(container.querySelectorAll('input'));

    container.addEventListener('focusin', () => startTimer('baseSix'));

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        sanitizeInput(input);
        evaluate();
      });
    });

    function evaluate() {
      let missing = 0;
      let incorrect = 0;

      const message = container.querySelector('[data-feedback="base-six"]');

      const fields = {
        carries: container.querySelectorAll('[data-role="carry"]'),
        rows: [
          container.querySelectorAll('[data-row="0"]'),
          container.querySelectorAll('[data-row="1"]'),
        ],
        final: container.querySelectorAll('[data-role="final"]'),
      };

      const checkValue = (inputEl, expectedValue) => {
        const value = sanitizeInput(inputEl);
        if (!value) {
          if (expectedValue) {
            inputEl.removeAttribute('aria-invalid');
            missing += 1;
          } else {
            inputEl.removeAttribute('aria-invalid');
          }
          return;
        }
        if (!letterSet.has(value)) {
          inputEl.setAttribute('aria-invalid', 'true');
          incorrect += 1;
          return;
        }
        if (!expectedValue) {
          inputEl.setAttribute('aria-invalid', 'true');
          incorrect += 1;
          return;
        }
        if (value === expectedValue) {
          inputEl.setAttribute('aria-invalid', 'false');
        } else {
          inputEl.setAttribute('aria-invalid', 'true');
          incorrect += 1;
        }
      };

      fields.carries.forEach((inputEl, index) => {
        checkValue(inputEl, expected.carries[index]);
      });

      fields.rows.forEach((rowInputs, rowIndex) => {
        rowInputs.forEach((inputEl, columnIndex) => {
          checkValue(inputEl, expected.rows[rowIndex][columnIndex]);
        });
      });

      fields.final.forEach((inputEl, index) => {
        checkValue(inputEl, expected.final[index]);
      });

      if (missing > 0) {
        if (message) {
          message.textContent = 'There are still open cells. Notice where the carries stack up.';
        }
        recordStatus('baseSix', 'incomplete');
        return;
      }

      if (incorrect > 0) {
        if (message) {
          message.textContent = 'Something is off. Which column felt the most awkward when the letters carried over?';
        }
        recordStatus('baseSix', 'attempted', incorrect);
        return;
      }

      if (message) {
        message.textContent = 'Nice! Hold onto how much thinking it took to stay in this unfamiliar place.';
      }
      recordStatus('baseSix', 'passed');
    }
  }

  function initFractionsExercise() {
    const container = document.querySelector('[data-exercise="fractions"]');
    if (!container) {
      return;
    }
    const numeratorOne = document.getElementById('fraction-1-numerator');
    const denominatorOne = document.getElementById('fraction-1-denominator');
    const numeratorTwo = document.getElementById('fraction-2-numerator');
    const denominatorTwo = document.getElementById('fraction-2-denominator');
    const comparisonSelect = document.getElementById('fraction-comparison');
    const checkButton = document.getElementById('fraction-check');
    const message = document.querySelector('[data-feedback="fractions"]');

    const inputs = [numeratorOne, denominatorOne, numeratorTwo, denominatorTwo].filter(Boolean);

    container.addEventListener('focusin', () => startTimer('fractions'));

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        const value = sanitizeInput(input);
        if (value && ![...value].every((char) => letterSet.has(char))) {
          input.setAttribute('aria-invalid', 'true');
        } else {
          input.removeAttribute('aria-invalid');
        }
        updateControls();
      });
    });

    function updateControls() {
      const denom1 = denominatorOne ? denominatorOne.value : '';
      const denom2 = denominatorTwo ? denominatorTwo.value : '';
      const ready = denom1 && denom2 && denom1 === denom2;
      comparisonSelect.disabled = !ready;
      checkButton.disabled = !ready;
      if (!ready) {
        comparisonSelect.value = '';
      }
    }

    checkButton.addEventListener('click', () => {
      const values = {
        n1: numeratorOne ? sanitizeInput(numeratorOne) : '',
        d1: denominatorOne ? sanitizeInput(denominatorOne) : '',
        n2: numeratorTwo ? sanitizeInput(numeratorTwo) : '',
        d2: denominatorTwo ? sanitizeInput(denominatorTwo) : '',
      };

      let incorrect = 0;

      const expected = {
        n1: 'AD',
        d: 'BC',
        n2: 'BZ',
      };

      const allLettersValid = Object.values(values).every((text) =>
        [...text].every((char) => letterSet.has(char)),
      );

      if (!allLettersValid) {
        if (message) {
          message.textContent = 'Those symbols slip back toward base ten. Stay with the alien digits from the first task.';
        }
        recordStatus('fractions', 'attempted', 1);
        return;
      }

      if (values.d1 !== expected.d || values.d2 !== expected.d) {
        if (message) {
          message.textContent = 'The gate stays closed until both denominators read BC. Check how you scaled each fraction.';
        }
        if (denominatorOne) {
          denominatorOne.setAttribute('aria-invalid', values.d1 === expected.d ? 'false' : 'true');
        }
        if (denominatorTwo) {
          denominatorTwo.setAttribute('aria-invalid', values.d2 === expected.d ? 'false' : 'true');
        }
        incorrect += 1;
        recordStatus('fractions', 'attempted', incorrect);
        return;
      }

      if (numeratorOne) {
        numeratorOne.setAttribute('aria-invalid', values.n1 === expected.n1 ? 'false' : 'true');
        if (values.n1 !== expected.n1) {
          incorrect += 1;
        }
      }
      if (numeratorTwo) {
        numeratorTwo.setAttribute('aria-invalid', values.n2 === expected.n2 ? 'false' : 'true');
        if (values.n2 !== expected.n2) {
          incorrect += 1;
        }
      }

      if (incorrect > 0) {
        if (message) {
          message.textContent = 'Try re-building the path from numerator to denominator. Where did the scaling go sideways?';
        }
        recordStatus('fractions', 'attempted', incorrect);
        return;
      }

      if (!comparisonSelect.value) {
        if (message) {
          message.textContent = 'Now decide who leaves the gate first. Pick a relationship.';
        }
        recordStatus('fractions', 'incomplete');
        return;
      }

      if (comparisonSelect.value !== 'gt') {
        if (message) {
          message.textContent = 'Look back at the converted numerators: BZ stays ahead of AD. Sit with why the larger number still feels unfamiliar.';
        }
        recordStatus('fractions', 'attempted', 1);
        return;
      }

      if (message) {
        message.textContent = 'You lined up every piece. Remember how deliberate you had to be just to compare two fractions.';
      }
      recordStatus('fractions', 'passed');
    });
  }

  function expressionValue(expression) {
    if (!expression) {
      return null;
    }
    const trimmed = expression.trim();
    if (trimmed.includes('+')) {
      const [left, right] = trimmed.split('+').map((part) => part.trim());
      return expressionValue(left) + expressionValue(right);
    }
    if (trimmed.includes('×')) {
      const [left, right] = trimmed.split('×').map((part) => part.trim());
      return expressionValue(left) * expressionValue(right);
    }
    if (trimmed.includes('−')) {
      const [left, right] = trimmed.split('−').map((part) => part.trim());
      return expressionValue(left) - expressionValue(right);
    }
    const letters = [...trimmed];
    if (!letters.every((char) => letterSet.has(char))) {
      return null;
    }
    return letters.reduce((acc, char) => acc * 6 + baseLetters.indexOf(char), 0);
  }

  function hasOperator(expression) {
    return /[+×−]/.test(expression || '');
  }

  function initRelationalExercise() {
    const container = document.querySelector('[data-exercise="relational"]');
    if (!container) {
      return;
    }
    const leftSelect = document.getElementById('relational-left');
    const rightSelect = document.getElementById('relational-right');
    const checkButton = document.getElementById('relational-check');
    const visualizeButton = document.getElementById('relational-visualize');
    const balance = container.querySelector('.balance');
    const message = document.querySelector('[data-feedback="relational"]');

    const start = () => startTimer('relational');
    leftSelect.addEventListener('change', start);
    rightSelect.addEventListener('change', start);

    checkButton.addEventListener('click', () => {
      const leftValue = expressionValue(leftSelect.value);
      const rightValue = expressionValue(rightSelect.value);

      if (!leftSelect.value || !rightSelect.value) {
        if (message) {
          message.textContent = 'Choose an expression for both pans of the scale first.';
        }
        recordStatus('relational', 'incomplete');
        return;
      }

      if (leftValue === null || rightValue === null) {
        if (message) {
          message.textContent = 'One of the selections pulled in digits outside the alien set. Reset with Z through E only.';
        }
        recordStatus('relational', 'attempted', 1);
        return;
      }

      if (leftValue === rightValue && hasOperator(leftSelect.value) && hasOperator(rightSelect.value)) {
        if (message) {
          message.textContent = 'That balance feels different than an answer. Equality can describe a relationship.';
        }
        recordStatus('relational', 'passed');
        return;
      }

      if (leftValue === rightValue) {
        if (message) {
          message.textContent = 'You made the numbers match, but one side collapsed into a single value. That rush to solve is the struggle students feel.';
        }
        recordStatus('relational', 'attempted', 1);
        return;
      }

      if (message) {
        message.textContent = 'The scale still tilts. Revisit which quantities belong together before equating them.';
      }
      recordStatus('relational', 'attempted', 1);
    });

    visualizeButton.addEventListener('click', () => {
      const leftValue = expressionValue(leftSelect.value);
      const rightValue = expressionValue(rightSelect.value);
      if (!balance) {
        return;
      }
      balance.classList.remove('visualize', 'tilt-left', 'tilt-right');
      if (leftValue === null || rightValue === null) {
        balance.classList.add('tilt-left');
        return;
      }
      if (leftValue === rightValue) {
        balance.classList.add('visualize');
      } else if (leftValue > rightValue) {
        balance.classList.add('tilt-left');
      } else {
        balance.classList.add('tilt-right');
      }
    });
  }

  function initProportionExercise() {
    const stepper = document.querySelector('[data-exercise="proportion"]');
    if (!stepper) {
      return;
    }

    const steps = [
      { id: 'proportion-step-1', expected: 'S', next: 2 },
      { id: 'proportion-step-2', expected: 'S', next: 3 },
      { id: 'proportion-step-3', expected: 'BZ', next: 4 },
      { id: 'proportion-step-4', expected: 'D', next: null },
    ];

    stepper.addEventListener('focusin', () => startTimer('proportion'));

    const message = document.querySelector('[data-feedback="proportion"]');

    steps.forEach((step, index) => {
      const input = document.getElementById(step.id);
      const stepElement = stepper.querySelector(`[data-step="${index + 1}"]`);
      if (!input || !stepElement) {
        return;
      }
      input.addEventListener('input', () => {
        const value = sanitizeInput(input);
        if (value.length === step.expected.length) {
          if (value === step.expected) {
            input.setAttribute('aria-invalid', 'false');
            stepElement.setAttribute('aria-disabled', 'false');
            unlockNext(step.next);
            if (step.next === null) {
              evaluateFinal();
            }
          } else {
            input.setAttribute('aria-invalid', 'true');
            if (step.next !== null) {
              lockStep(step.next);
            }
          }
        } else {
          input.removeAttribute('aria-invalid');
        }
      });
    });

    const hintButtons = stepper.querySelectorAll('.hint-button');
    hintButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const hintId = button.getAttribute('data-hint');
        const hint = stepper.querySelector(`[data-step="${hintId}"] .stepper__hint`);
        if (hint) {
          hint.hidden = false;
        }
      });
    });

    function lockStep(stepNumber) {
      if (!stepNumber) {
        return;
      }
      const target = stepper.querySelector(`[data-step="${stepNumber}"]`);
      if (!target) {
        return;
      }
      target.setAttribute('aria-disabled', 'true');
      const input = target.querySelector('input');
      const hintButton = target.querySelector('.hint-button');
      if (input) {
        input.value = '';
        input.setAttribute('disabled', '');
        input.removeAttribute('aria-invalid');
      }
      if (hintButton) {
        hintButton.setAttribute('disabled', '');
      }
    }

    function unlockNext(stepNumber) {
      if (!stepNumber) {
        evaluateFinal();
        return;
      }
      const target = stepper.querySelector(`[data-step="${stepNumber}"]`);
      if (!target) {
        return;
      }
      target.removeAttribute('aria-disabled');
      const input = target.querySelector('input');
      const hintButton = target.querySelector('.hint-button');
      if (input) {
        input.removeAttribute('disabled');
      }
      if (hintButton) {
        hintButton.removeAttribute('disabled');
      }
    }

    function evaluateFinal() {
      const values = steps.map((step) => {
        const input = document.getElementById(step.id);
        return input ? sanitizeInput(input) : '';
      });

      if (values.some((value, index) => value !== steps[index].expected)) {
        if (message) {
          message.textContent = 'Trace the chain again—one shaky letter earlier throws off the final quotient.';
        }
        recordStatus('proportion', 'attempted', 1);
        return;
      }

      if (message) {
        message.textContent = 'Proportion solved. Notice how every earlier struggle fed into this final answer.';
      }
      recordStatus('proportion', 'passed');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    toggleMapping();
    initBaseSixExercise();
    initFractionsExercise();
    initRelationalExercise();
    initProportionExercise();
    updateStats();
  });
})();
