# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by the `useEffect` hook. The bug arises from incorrectly specifying the dependency array, leading to continuous state updates.

## Bug Description

The `MyComponent` function uses the `useState` hook to manage a count variable.  The `useEffect` hook attempts to increment the count on every render. Since the `useEffect` is called with an empty dependency array (`[]`), it runs after every render, leading to an infinite loop of state updates. 

## Solution

The solution involves correctly managing the dependency array. Adding `count` as a dependency prevents the infinite loop.  The `useEffect` will only run when the `count` value changes.