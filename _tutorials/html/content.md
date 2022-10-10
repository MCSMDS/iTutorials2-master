---
layout: default
---
# 内容

这些元素必须嵌套在```<body>```元素里。


## 标题

<h1>这是标题 1</h1>
<h2>这是标题 2</h2>
<h3>这是标题 3</h3>
<h4>这是标题 4</h4>
<h5>这是标题 5</h5>
<h6>这是标题 6</h6>
``` html
<h1>这是标题 1</h1>
<h2>这是标题 2</h2>
<h3>这是标题 3</h3>
<h4>这是标题 4</h4>
<h5>这是标题 5</h5>
<h6>这是标题 6</h6>
```


## 段落

<p>我是段落。</p>
``` html
<p>我是段落。</p>
```

``` html
<!--以a 开头和结尾-->
```



## 图片

<picture>
<source type="image/webp" srcset="/html/index.webp?v={{ "now" | date: "%s" }}">
<source type="image/jpeg" srcset="/html/index.jpg?v={{ "now" | date: "%s" }}">
<img src="/html/index.jpg?v={{ "now" | date: "%s" }}" class="img-fluid mb-3" alt="example">
</picture>
``` html
<img src="...">
```

``` html
<a href="https://freecodecamp.org">this links to freecodecamp.org</a>
```

## 无序列表

<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
``` html
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>	
```



## 有序列表

<ol>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ol>	
``` html
<ol>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ol>	
```


``` html
<input type="text">

<form action="/url-where-you-want-to-submit-form-data"></form>

<button type="submit">this button submits the form</button>

<label for="indoor"> 

</div>
```



## 块级引用

<blockquote>引用</blockquote>
``` html
<blockquote>引用</blockquote>
```



## 表格