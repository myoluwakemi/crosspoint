<template>
  <div class="page-loader" v-if="!isLoaded">
    <svg class="cube" width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="44" rx="10" fill="white"/>
      <path d="M18.524 24.216C17.24 24.216 16.076 23.94 15.032 23.388C14 22.824 13.184 22.05 12.584 21.066C11.996 20.07 11.702 18.948 11.702 17.7C11.702 16.452 11.996 15.336 12.584 14.352C13.184 13.356 14 12.582 15.032 12.03C16.076 11.466 17.246 11.184 18.542 11.184C19.634 11.184 20.618 11.376 21.494 11.76C22.382 12.144 23.126 12.696 23.726 13.416L21.854 15.144C21.002 14.16 19.946 13.668 18.686 13.668C17.906 13.668 17.21 13.842 16.598 14.19C15.986 14.526 15.506 15 15.158 15.612C14.822 16.224 14.654 16.92 14.654 17.7C14.654 18.48 14.822 19.176 15.158 19.788C15.506 20.4 15.986 20.88 16.598 21.228C17.21 21.564 17.906 21.732 18.686 21.732C19.946 21.732 21.002 21.234 21.854 20.238L23.726 21.966C23.126 22.698 22.382 23.256 21.494 23.64C20.606 24.024 19.616 24.216 18.524 24.216Z" fill="#7D17AD"/>
      <circle cx="18" cy="33" r="3" fill="#7D17AD"/>
    </svg>

    <div class="cube"></div>
    <div class="cube"></div>
    <svg class="cube" width="127" height="50" viewBox="0 0 127 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="127" height="50" fill="url(#pattern0)"/>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0" transform="translate(-0.00107373) scale(0.00894775 0.0227273)"/>
        </pattern>
        <image id="image0" width="112" height="44" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAAsCAYAAAC9rDzHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAqxSURBVHgB7VxPTBzXGf/ezIKRHdsbKbZp1cSDlEuUqoZbHakxK1+aQxUwdtP0wlKpPfQCSD1EkYHF0KqHSsCllVqprE9R/sAuJ+eSsqRS0kMr1lWqVFUkxq3UgB2pa7utMOzOy/e9eW/2zewsMPvHS/D+pMfOn/dv5nvf3/cNDEIwFl+Mnzx2KomHl7D0YrGgMbCx5MGBlZl7Q2loo26w4IXrZ98bYMAW8U4cmgsbCTndJmR9MPSTqXOZOcZY5jEQj2Dh6IuTZzNT0EbN8Djw+tmlKcYgBa3B/MzW0Di0ERmCgBNnlpLEDdBCcM4HZ+9ezUIduP7Mu/3MNF7FQ4sDtxgYBew5z0vOyuwX13KqXupMprfEnNHQeYBzB0V7Tq8fhG4jaOMUSLfvmju5X26+bu83PxC2BbOrtfPG4HCBM052CIQ9j0vAc0sb0DhDpVYUHj560DNfGClARIiH7Tw1h0+TrFqJQ/rhzoNx6l++yNW9ewV7l+0kgsQ4gI0Qqtv3l3AsN7N1JUFHb3S/ZXXwTpqfVa02Z05idvNazhDc13riEeInjj2VhBrw1LGTqzrxkJvzRDDkjpxXCe9LrvGDQ4HqqaLdES+RFoe6MHkuM+qzEbAt/s3KYqt2JM2QKcZUO7FgdOLR3LgzjeMtiLm6k1btIcY7FkHSRM5rgeqLcdwxIQYx2/1l8CocEhjA+vFnPkobsbJdV4dg48ocmd3SxGV3xnIcngGDr9zYHArrOzu7dXUkWF+KLUsuqnniCu44KWU10EuN7ZipVGHQkxjXu99NMW4oo2wK22QFB5tswBuNwQjq+7Q+ARpT9ZuKZ+IlcPrV8+DcEsEJ4zj9qc0hm45jDGU4r/QmWgR2ASKCaZxnMiOhHkwhtTlI531wQFD9N8+8s2AyU9gEBjfEnGJOLKlxXhr19ViwLYq0FIpYC7l0GE/jyElUZwzrx71XjDotbEzvpAvrcu8sTgsnKMZJdKrjGGesFw4PrCiVSTRBWdTkfS+iDpiG6YlN5MT74oCxS941w7lZtbHB09hoWDQBRtKNiEgidljWGEPxShyZRfG59t+dhzld79Mz4H0b3OeKoxjfwHNqv1ZySrlf3Pt+3jccHBHgAr8DDQCtePzxLFTkprzbP7PUtS52fKNae507vGtoXaNon9YuWVjGSJ+iXv7PxLnlVTmuAEkSKOtUAhF8DhfWOhmc0m4RiEEdsF56Bl747tfh6edOQPwbx2H7wS58/kkBPn3/32B/9AU8XhinoTYM4Evp9864TwrYM5uuvmKcF1Ba7deXuwB45XUSr6jr0kVeIo68wFx9rwbtR05bx7Z9JC6lJOmZ6F4iN4K4WA9nqgDI+Rt3B6drImDXqQ54ZeZb0Pfa+Yp7RNSLP3ke1t/+J9yauC2I2izEirF8yXTkGe8lizGyG+LqtQqXgKy/GDM94wZHua2MpZ3SNl1PhXXXUersL8s1flu/JwkjdKcwVrqcARyIjB4LdJ0pIRdPWtRH37XISmNSv5IbQfWmaxKhI8vf8RFv82/3IY8E07mu77XnoBdLM0EWoGb6u75gCMj8R8MkVNeT7hQmPRbGmadfkENWfDqVdJtqw2BUF3kK4poB5dAgY1nfvcDciUCoB70IFI5/OqyuqH9vMI+iOAll0RqnBctQfIQwfHUkfvaCKITCv/4Py6N/9hEu/uxxeD39bfj7rc9h9VefQlSgiR3JJCYTvOQ465pjbWNZwGhF3mHcMo3YMIkomi4aAQkyAnyOPFqUM3eHBKcJruh0NmRfBXTk+3QLEC3MtOIA1RZdi5tgsLgB5gWM4oxp88jiswzSgRbpylLUpQSlfOduR6EYK1qo8OZwsbiLi1wMJKoMrIB6DpQ0Yg5OJwwj56XUc2L/PZFFqM55v7/yoSCiDjr/zeU/wOMCcQmKlwSGxjLgiiIqc0ggMEUNuT7xpxM69u4LuQKJNIIvlPoikUa/nguCft9Y6ZhDXOL6dejC4DhJt3vH60eI30dl8av52gNIyAETZ4b9UGhMb5Of3byalpLCkpfFc5TVRBmKcyOJUNJvxGEEEptB4rUKJF7IcsOHuqkiFR7cSMuCaRh9VG+/voTFiPXpmDhj8uxSyhuHxB5xFXKKF0HxDYXiHO+R8607+Dj2uC/qEpwfWqhIcOGwCzeB+vdHhXxjiDCajBtHEqFEwB8tvyyOydJ8K/knaDSiitAwCIVvFuMUbmqUbxg6DorcYlexN1aKFWAXbJ1oe7VBQWAddH7es1QZo2YCbnx0Dxav/BEajUYQ8ElCJBG6+cl97/hrL8aFO9FGaxGJgOTTEecRuk67vmAYyA/sfrFWv7qNKIhshWZG/wI//eCy4D6ySHteOgMf/+4zEYF5+tkT4hqJ2u37u8JKJWOnjeYhMgHJ8iTC/HDxorBIqbxyI4QTGcCh2eQ4wqgpEkO6kIi4/vadilAZnX/828/g15c/8OnMNpqDyJGYMHR/87QQqcSd9fqGbSs0GurajVBoc1rr0BACthIyyagyLYSJiMwdjGdmq2WJESggfKozPorRjV4vw4zyUzishSUdy3ipCJo7zLn9861r8+K6lulW4qWF4MZrcK4UQxW7KbKvfYHPE5Z6+ZUnIG0jYdQ/We0u7rPNTZxd8jLS9Hu0S4ExzHkVx2TC6uLKAEuiepmqyExzUx6SdIjR1hzIHJ4iL8aZ4cZFTWYOqL29anPFQPsa9mWrvg4AG0sFAY/MjryE7WWY6XFHkZF2OqNXpCx0Ip7etiKTzc1MW6+2FbUH4sGMtmrQM+KC8U/fdQ65sPZHgAPLwO2iaRRdaXXu32ri/ZTNRSkPtL3jgFNOSpLbOL52XIg22nWIm4ZJxO+BaLDkoklUqyDjoInAuGorKTQjLYi6OZD2Bt/8x/dEqRaZaRXoBXHGvQQkp8Qt+uUG9/b0kJDjOvFUO/ORQdtBtrxkEfEhMnh/s7/9qIuA5MATAcmFoHLxx897m72HBWqX23dNy0dRRkgQMuq/4F3gWm7n/rDLzZzUZPfyMDQJdRGw7weVOTFExMMCmXaov/i8SKItw96rPdeypcMWQvWGQl+Na/3M16BHD4QjZcSg9Tcn0u5kEWkTWjKuMO23IfK3F7UATf55tTEMUo+ii3IeGoy6CEghsyAovNYyuMSytCIgduR3DMERUjTa8taeus3nXxqwBhGBRsiYZllae358UyPICrWhxo9bKGlJ7EpIUUoErSWRSYHyQqA+ZDl3vFQ+x+B253ZHNriLjXVuMia/YeBsDn22waDPNnlmeRgNoKQ6N8HIQQ2IPTIHS8fQEq7xHe/bP741ysGwoEbcmvyrKI1AvdnV6Eas6G5ENcR2YvP4UsmwsCjvhXw2FLnlTDZmXtKJxxhM15qaQYsH9W4ikDnXMBjYaWTR0DRoeZTNBL3UQPq6BW4G2CrqqkVd1BHxbmwOpaAOCHcG+Ag0AQb6O+mKTK7WwA76Y82E9PX65DcLdvC+yv6ql3gKId9HNARi60YEWRnLQCsRiIY8bpB7UYSiFSXD7DCg/E8Ozr03j/pgFFqARoipJxWmOvjwf++8//LJa8z/1UzzQSb+zNbVN6CNmlCx+y0/aVJfzDQPbsb0SL3/meJJR9X0BfVtGoaB6JPhRoWBbKB/tQWwRsbTV0XPHGZ8CQvJUc9E8mVPAAAAAElFTkSuQmCC"/>
      </defs>
    </svg>

  </div>
</template>

<script>
export default {
  name: "LogoLoader",
  data: ()=>{
    return{
      isLoaded: false
    }
  },
  mounted() {
    document.onreadystatechange = () =>{
      if(document.readyState === 'complete'){
        this.isLoaded = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
$colors: transparent, #000, #000, transparent;

.page-loader{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(255, 255, 255);
  z-index: 999;
}
.cube{
  width: 60px;
  height: 60px;
  margin-right: 10px;
  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      background-color: nth($colors, $i);
    }
  }
  &:first-child {
    animation: left 1s infinite;
    -webkit-animation:left 1s infinite;

  }
  &:last-child {
    animation: right 1s infinite .5s;
    -webkit-animation: right 1s infinite .5s;;
  }
}
@keyframes left {
  40%{
    transform: translateY(-60px);
  }
  50%{
    transform: translateY(0);

  }
}
@keyframes right {
  40%{
    transform: translateX(60px);

  }
  50%{
    transform: translateX(0);
  }
}
</style>