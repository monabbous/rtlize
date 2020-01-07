# RTLize

This package allows you to use one css file for both directions "rtl", "ltr", also comes with js object where changes the locale as well as the direction on the root html element.

### 1. Install

`npm i rtlize`

### 2. Usage

#### 2.1 Scss

    // import the sass mixin
    import 'rtlize';
    
    // Use to define your rtlized styles in scss
    .information-floating-button { 
        position: fixed;
        bottom: 20px;
        @include rtlize('start', 20px);
    }
    .
    .
    .
    // This will output in css
    .information-floating-button { 
        position: fixed;
        bottom: 20px;
    }
    :not([dir=rtl]) .information-floating-button { 
        left: 20px;
    }
    [dir=rtl] .information-floating-button { 
        right: 20px;
    }


The mixin that is used is `rtlize($property, $value)`,
the `$property` can be anything desired, but the catch is that it detects certain keywords and converts them such as the table below:

| Name | Value | LTR | RTL |
|------|-------|-----|-----|
| Start | `start` | `left` | `right` |
| End | `end` | `right` | `left` |

for example `margin-start` will be `margin-left` for ltr and `margin-right` for rtl.

Also `$value` will detects other keywords such as the table below:
| Name | Value | LTR | RTL |
|------|-------|-----|-----|
| Start | `start` | `left` | `right` |
| End | `end` | `right` | `left` |
| Negative Number | `$NN` | `-` | ` ` |
| Positive Number | `$PN` | ` ` | `-` |
| Full Percentage | `$FP` | `100%` | `0%` |
| Empty Percentage | `$FP` | `0%` | `100%` |

Example:

    .information-floating-button { 
        @include rtlize(transform, 'translateX($NN50%)`);
    }

    // This will output in css
    :not([dir=rtl]) .information-floating-button { 
        transform: translateX(-50%);
    }
    [dir=rtl] .information-floating-button { 
        transform: translateX( 50%);
    }

#### 2.1 JS
*---------Soon*