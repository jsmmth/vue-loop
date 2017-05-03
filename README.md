![cover](https://cloud.githubusercontent.com/assets/3231370/25569788/1a75e24a-2deb-11e7-8e16-88283272309b.png)

# Vue Loop
We've had a lot of people compliment us on the infinite content loop we did over at [Look Studios](http://lookstudios.xyz). We decided to build a simple .vue file for all you vue fans to use.

[Live Demo](https://cdn.rawgit.com/lookstudios/vue-loop/ea086525/Examples/public/index.html)
[Horizontal Demo](https://cdn.rawgit.com/lookstudios/vue-loop/ea086525/Examples/public/horizontal.html)
[Contained Demo](https://cdn.rawgit.com/lookstudios/vue-loop/ea086525/Examples/public/contained.html)

## Showcase
Sites using Vue Loop 💙

- [Look Studios](http://lookstudios.co)
- [Submit your site](https://github.com/lookstudios/vue-loop/issues/new)

## Installation
`npm install vue-loop --save`

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
