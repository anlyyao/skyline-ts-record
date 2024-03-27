Component({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    animation: {},
  },

  ready() {
    this.setData({
      animation: wx
        .createAnimation({ duration: 3000, timingFunction: 'linear', delay: 500 })
        .rotate(150)
        .scale(3)
        .step({ duration: 8000 })
        .export(),
    });
    // this.setData({
    //   animation: wx
    //     .createAnimation({ duration: 3000, timingFunction: 'linear', delay: 500 })
    //     .translateX(-100)
    //     .step()
    //     .export(),
    // });
  },
  methods: {},
});
