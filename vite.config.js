export default {
    base: "./",
    build: {
      outDir : "docs",
      rollupOptions:{
    
        output: {
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`,
          
        },

      },
      polyfill: true,
      minify: true
    } ,


  }