# Dirt Rally League Notifier

Simple program to push a notification to a given notification service when there has been a change to a Dirt Rally RaceNet League board.

## Running locally

[WIP] Execution model for program has yet to be defined.

## Running tests

```npm run test```

## Contributing

This project is open to feedback and contributions, feel free to raise a pull request against the main branch if you have a contribution!

Code is developed using Test Driven Development, please follow this where possible when contributing!

### Commit messages

This repository loosely follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

If a commit has been pushed in a WIP state during TDD flow, appending a marker to the commit message can help others to understand what state the commit is in.

Some examples:

`feature (Rgr): introducing some new feature` - indicates that tests are failing (red).

`feature (rGr): introducing some new feature` - indicates that tests are passing (green), but production code may only be using the simplest implementation to make the tests pass and are pending a refactor.

`feature (rgR): introducing some new feature` - indicates that tests are passing (green) and that a production implementation is being worked on, but may not be fully complete.

Any commits that do not have a (rgr) marker  are assumed to have a fully passing test suite.

Where possible, please squash any (rgr) marker commits.