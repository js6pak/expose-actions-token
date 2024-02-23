# expose-actions-token

Exposes ACTIONS_* environment variables for use outside nodejs actions

## Usage

```yaml
- uses: js6pak/expose-actions-token@v1
```

## Why

- https://github.com/orgs/community/discussions/42856
- https://github.com/actions/runner/issues/3046
- https://github.com/actions/toolkit/issues/1053

### Alternatives

- [crazy-max/ghaction-github-runtime](https://github.com/crazy-max/ghaction-github-runtime)
- ```yaml
  - uses: actions/github-script@v7
    with:
      script: |
        Object.entries(process.env)
          .filter(([name, _]) => name.startsWith("ACTIONS_"))
          .forEach(([name, value]) => core.exportVariable(name, value));
  ```
