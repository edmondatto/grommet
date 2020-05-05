## CheckBoxGroup
A group of CheckBoxes.

[![](https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png)](https://storybook.grommet.io/?selectedKind=CheckBoxGroup&full=0&addons=0&stories=1&panelRight=0) [![](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=checkboxgroup&module=%2Fsrc%2FCheckBoxGroup.js)
## Usage

```javascript
import { CheckBoxGroup } from 'grommet';
        <CheckBoxGroup />
```

## Properties

**checked**

An array of the checked options. If options is provided as an object, the
      checked array will be the strings of the checked option valueKey.

```
[string]
```

**disabled**

Disables all options.

```
boolean
```

**labelKey**

When the options array contains objects, this property indicates how
        to determine the label of each option. If a string is
        provided, it is used as the key to retrieve each option's label.

```
string
function
```

**name**

The DOM name attribute value to use for the underlying <input/> 
      elements. Required when used in the Context of FormField.

```
string
```

**onChange**

Function that will be called when the user clicks on a CheckBox option. 
      It will be passed a React event object with a value.

```
function
```

**options**

Required. Options can be either a string or an object of CheckBox props.

```
[string]
[{

}]
```

**valueKey**

When the options array contains objects, this property indicates how
        to determine the value of each option. If a string is
        provided, it is used as the key to retrieve each option's value.

```
string
```
  
## Intrinsic element

```
div
```