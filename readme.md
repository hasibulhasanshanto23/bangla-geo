# bangla-geo

It's a Reactjs hook to get the information(divisions,districts,division details)  of bangladesh.

## Install

``` bash
#with npm
npm install bangla-geo

#with yarn
yarn add bangla-geo

```
### How to use it?

- import the package in your app:
```js
import {useDistricts,useDivisions,useDivisionDetails} from 'bangla-geo'
```
- Get the information from hooks:
```js
const {loading,error,districts}=useDistricts();
const {divisions}=useDivisions();
const {divisionDetails}=useDivisionDetails('barishal');
```




