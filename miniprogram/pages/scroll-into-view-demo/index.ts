const image = 'https://tdesign.gtimg.com/mobile/demos/example2.png';
const items = new Array(12).fill({ label: '标题文字', image }, 0, 12);

Page({
  data: {
    sideBarIndex: 1,
    scrollTop: 0,
    categories: [
      {
        label: '选项一',
        title: '标题一',
        badgeProps: {},
        items,
      },
      {
        label: '选项二',
        title: '标题二',
        badgeProps: {
          dot: true,
        },
        items: items.slice(0, 9),
      },
      {
        label: '选项三',
        title: '标题三',
        badgeProps: {},
        items: items.slice(0, 9),
      },
      {
        label: '选项四',
        title: '标题四',
        badgeProps: {
          count: 6,
        },
        items: items.slice(0, 6),
      },
      {
        label: '选项五',
        title: '标题五',
        badgeProps: {},
        items: items.slice(0, 3),
      },
    ],
    scrollIntoView: 'title-3',
  },

  onLoad() {
    this.scrollIntoView(this.data.sideBarIndex);
  },

  scrollIntoView(index: number) {
    this.setData({
      scrollIntoView: `title-${index}`,
    });
  },

  onScroll(e) {},
});
