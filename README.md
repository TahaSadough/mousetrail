# MouseTrail

# a lightweight, framework-independent mouse tracker library

## Installation or Update

#### bun

```sh
bun add @codemasters/mousetrail@latest
```
#### npm
```sh
npm i @codemasters/mousetrail@latest
```
###### or anything you like
## Getting Started
```js
import createMT from "@codemasters/whisper";

createMT(); 
```
#### this will create a mouse trail,you can use it with any javascript framework,library and even vanilla js
###### for nextjs for example you can add this to a client component then use the component inside a server component like main layout to create mouse trail

#### You can also pass an object for options:
```js
createMT({
 backgroundColor:"#ffffff",
 size:{width:12,height:12},
 expandOnClick:true,
});
```
###### more options will be added
