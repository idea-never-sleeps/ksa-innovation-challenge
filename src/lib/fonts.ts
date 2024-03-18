import localFont from 'next/font/local';

export const wanted_sans = localFont({
  src: [
    {
      path: '../asset/fonts/wanted/WantedSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../asset/fonts/wanted/WantedSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../asset/fonts/wanted/WantedSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../asset/fonts/wanted/WantedSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../asset/fonts/wanted/WantedSans-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../asset/fonts/wanted/WantedSans-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../asset/fonts/wanted/WantedSans-ExtraBlack.woff2',
      weight: '1000',
      style: 'normal',
    },
  ],
})

export const happiness_sans = localFont({
  src: [
    {
      path: '../asset/fonts/happiness/Happiness-Sans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../asset/fonts/happiness/Happiness-Sans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../asset/fonts/happiness/Happiness-Sans-Title.woff2',
      weight: '900',
      style: 'normal',
    }
  ],
})