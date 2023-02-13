// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

// Переменные путей
const buildFolder = `./dist`;
const srcFolder =  `./src`;


// Основные пути
export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        svgicons: `${srcFolder}/svgicons/*.svg`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}
