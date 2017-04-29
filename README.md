<img width="848" alt="screen shot 2017-04-28 at 7 19 00 pm" src="https://cloud.githubusercontent.com/assets/3231370/25550501/93bef97a-2c47-11e7-83c6-37534fdf4d04.png">

# Vue Loop
We've had a lot of people compliment us on the infinite content loop we did over at [Look Studios](http://lookstudios.xyz). We decided to build a simple .vue file for all you vue fans to use.

## Installation
- `npm install vue-loop --save`

### Usage 
```javascript
import VueLoop from 'vue-loop'

new Vue({
    el: '#app',

    components: {
        VueLoop
    }
})
```

```html
<vue-loop :full="true" :horizontal="false">
    <div class="item">
        1
    </div>
    <div class="item">
        2
    </div>
    <div class="item">
        3
    </div>
    <div class="item">
        4
    </div>
</vue-loop>
```

## Optional Props
| Prop          | Type          | Default       |
| ------------- |:-------------:|:-------------:|
| full          | Boolean       | true          |
| horizontal    | Boolean       | false         |

## Features
- Full page content looping
- Contained content loop
- Horizontal & Vertical options

## Support
- [joe@lookstudios.co](mailto:joe@lookstudios.co)
- [@lookstudiosco](http://twitter.com/lookstudiosco)

## License
MIT
