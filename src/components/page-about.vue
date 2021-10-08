<template>
    <div class="nes-container is-rounded is-dark">
      <div class="nes-container">
        <img src="~@/assets/image/swanine.jpg" alt="">
      </div>
      <div class="about">
        <h2>swanine - <span>严鸿浩</span><span>(yán hóng hào)</span></h2>
        <h3>swanine - <span>严鸿浩</span><span>(yán hóng hào)</span></h3>
        <p>
          <img src="~@/assets/image/location.svg"> China Hefei</p>
        <p>
          <img src="~@/assets/image/mail.svg"> swanine99@gmail.com</p>
        <p>WeChat: swanine</p>
      </div>
    </div>
</template>

<style scoped lang="scss">
.nes-container.is-rounded.is-dark {
  display: flex;
  @media screen and (min-width: 320px) and (max-width: 374px) {
    flex-direction: column;
    align-items: center;
    .about {
      font-size: 12px;
      h2 {
        display: none;
      }
      h3 {
        span {
          font-size: 20px;
        }
      }
      img {
        display: none;
      }
      & p:nth-child(4) {
        margin-bottom: 16px !important;
        left: 0 !important;
      }
    }
  }

  @media screen and (min-width: 375px) and (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    .about {
      font-size: 15px;
      h2 {
        font-size: 19px;
        span {
          font-size: 23px;
        }
      }
      h3 {
        display: none;
      }
      img {
        display: none;
      }
      & p:nth-child(4) {
        margin-bottom: 16px !important;
        left: 0 !important;
      }
    }
  }

  @media screen and (min-width: 401px) and (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    .about {
      font-size: 16px;
      h2 {
        font-size: 22px;
        span {
          font-size: 25px;
        }
      }
      h3 {
        display: none;
      }
      img {
        display: none;
      }
      & p:nth-child(4) {
        margin-bottom: 16px !important;
        left: 0 !important;
      }
    }
  }

  @media screen and (min-width: 451px) and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    .about {
      font-size: 18px;
      h2 {
        font-size: 24px;
        span {
          font-size: 27px;
        }
      }
      h3 {
        display: none;
      }
      img {
        display: none;
      }
      & p:nth-child(4) {
        margin-bottom: 16px !important;
        left: 0 !important;
      }
    }
  }
  .nes-container {
    width: 200px;
    height: 200px;
    background-color: #FFA7C4;
    padding: 6px;
    img {
      width: 180px;
    }
  }
  .about {
    flex: 1;
    padding: 10px;
    span {
      font-size: 26px;
      vertical-align: text-bottom;
    }
    h3 {
      display: none;
    }
    & span:nth-child(2) {
      font-size: 16px;
    }
    & p:nth-child(2) {
      margin-top: 16px;
    }
    img {
      width: 32px;
      vertical-align: bottom;
    }
  }
}
</style>
