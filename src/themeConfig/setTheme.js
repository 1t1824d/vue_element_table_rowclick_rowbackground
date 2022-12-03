/**
 * 使用此方法设置主题
 *
 * 新增主题需先在此处引入新主题的.scss文件，再在themeConfig里配置主题相关组件颜色
 */


// import './darktheme/styls.scss';
// import './lighttheme/styls.scss';


export const themeList = [{
        Name: '默认',
        Key: ''
    },
    {
        Name: '深黑',
        Key: 'darktheme'
    },
    {
        Name: '浅灰',
        Key: 'lighttheme'
    }
];

export const setTheme = (themeKey) => {
    let Key = 'themeProperty';
    if (!!themeKey) {
        if (!!window.localStorage.getItem(Key)) {
            window.localStorage.removeItem(Key)
        }
        document.body.className = themeKey;
        window.localStorage.setItem(Key, themeKey)

    } else {
        if (!!window.localStorage.getItem(Key)) {
            window.localStorage.removeItem(Key)
        }
        if (document.body.className) document.body.className = ''
    }
}