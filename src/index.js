import './styles.css';

import { multiply, isSmallerThan10 } from './1_basics';
import { guardPower } from './2_mockFn';
import { generatePassword } from './3_mockDep';
import { fetchJoke } from './4_mockFetch';

document.getElementById('app').innerHTML = `
<h1>Intro to Testing with Jest</h1>
<div>
  Playground to practice Jest. 

  You can see all functions being called in this page.

  <br/>

  Instructions:
  <ol>
    <li>Fork this sandbox</li>
    <li>Click the Github icon in the sidebar to create a repo</li>
    <li>Clone the repo locally</li>
    <li>Run the tests with <code>npm run test</code>. (Bug, you need to <a href="https://github.com/sandrina-p/tests_from_sandbox/pull/1" target="_blank">setup Jest manually</a>)</li> 
    <li>Create a new branch, Write the tests, and send me the PR.</li>
  </ol>
</div>
`;

async function init() {
  console.log('multiply', multiply(3, 4));

  console.log('isSmallerThan10 - 1', isSmallerThan10(1));
  console.log('isSmallerThan10 - 20', isSmallerThan10(20));

  guardPower((power) => {
    console.log('Power is:', power);
  }, 4);

  try {
    guardPower((power) => {
      console.log('Power is:', power);
    }, 5);
  } catch (e) {
    console.log(e);
  }

  console.log('pass:', await generatePassword(5));
  console.log('pass:', await generatePassword(5, 'aaa'));

  // Random joke
  console.log('joke:', await fetchJoke());
  // Jokes that contain "what"
  console.log('joke:', await fetchJoke('what'));
}

init();
