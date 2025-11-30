Steps:
1. npm init playwright@latest
2. npx playwright install chromium 
3. npm install @cucumber/cucumber
4. Install VSCode extension of Cucumber Gherkin
5. Create pageObject folder with POM class files in js
6. Create a feature folder where you can create .feature files
7. Create a step_definitions folder inside feature folder, where you can create step definitions js files. 
8. Run the cucumber tests with npx cucumber-js --exit

If you want to run a specific feature file, use below: 
npx cucumber-js features/Validation.feature --exit

If you want to run a specific tagged feature files, use below: 
npx cucumber-js --tags "@Regression" --exit

In playwright cucumber js -- only the scenario and scenario outline can be run in parallel mode and not the feature files. 
To run parallel, --> npx cucumber-js features/clientAppFunctionality.feature --parallel 2 --exit


Refer the below documentation for more: 
https://github.com/cucumber/cucumber-js