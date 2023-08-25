module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'sma1-img': "url('/aset/bg1.jpeg')",
        'sma2-img': "url('/aset/bg2.jpeg')",
        'bulat-img': "url('/aset/bulat.png')",
      }),
      colors:{
        lb:'#F0EED7',
        lb2:'#ECEFD2',
        lb3:'#CAC8BC',
        fc:'#391818',
        lbd:'#1E293B',
        lbd2:'#1F2937',
        lbd3:'#111827',
        fcd:'#391818',
        lbh:'#94A3B8',
        lbhd:'#94A3B8',
      },
    },
  },
  plugins: [],
}