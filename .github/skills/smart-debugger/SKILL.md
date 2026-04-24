---
name: smart-debugger
description: 'Analyze bugs, runtime errors, build failures, API issues, state bugs, auth problems, and unexpected behavior. Use when you need root cause analysis, solution options, and a recommended fix.'
argument-hint: 'Describe the bug, error message, stack trace, and expected behavior.'
---

# Smart Debugger

Analyze failures and unexpected behavior in the codebase, identify the root cause, compare repair options, and recommend the most maintainable fix.

## When to Use

- Runtime errors
- Build or typecheck failures
- API and network issues
- State management bugs
- Authentication or session issues
- Logic regressions
- Performance issues with a concrete failing symptom

## Expected Inputs

- Error message or stack trace
- Relevant file, symbol, or code snippet
- Expected behavior and actual behavior
- Reproduction steps, if available

## Procedure

1. Understand the failure.
   - Identify the failure type: syntax, runtime, logic, network, auth, performance, or configuration.
   - Extract the exact error text, affected code path, and reproduction trigger.
   - Restate the expected behavior versus the actual behavior.

2. Find the root cause.
   - Point to the exact line, function, state transition, or configuration causing the issue.
   - Explain why the failure happens, not just where it appears.
   - Call out nearby contributing factors if they materially affect the fix.

3. Propose repair options.
   - Provide 2 or 3 realistic solutions when tradeoffs exist.
   - Include a direct fix for the root cause.
   - Include a workaround only if it is useful and clearly labeled as a compromise.
   - Prefer solutions aligned with the framework and codebase patterns already in use.

4. Recommend the best option.
   - Mark one option as `Recommended Solution`.
   - Justify the recommendation using maintainability, correctness, scalability, and consistency with the current stack.

5. Provide the fix.
   - Show the minimal production-ready code change when appropriate.
   - Keep the change focused on the root cause.
   - Mention any required validation steps such as tests, builds, or manual repro checks.

6. Add prevention guidance.
   - Suggest patterns, guardrails, or tests that would have caught the issue earlier.
   - Mention lint rules, typing improvements, or architectural adjustments when relevant.

## Response Structure

Use this structure in the final response:

```markdown
### Problem

<Short summary of the failure>

### Root Cause

<Why the issue happens, with the exact file, line, symbol, or pattern when available>

### Solutions

#### Option 1

<Direct fix>

#### Option 2

<Alternative fix or workaround>

#### Option 3

<Best-practice variant when meaningfully distinct>

### Recommended Solution

<Best option with reasoning>

### Prevention Tips

<How to avoid the issue next time>
```

## Quality Bar

- Prefer root-cause fixes over surface patches.
- Do not invent causes that are not supported by the evidence.
- Keep recommendations specific to the observed code and stack.
- If information is missing, identify the missing detail and state the smallest next check needed.
