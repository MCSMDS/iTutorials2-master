---
layout: default
---
### HTTP环境安装

- [Nginx(推荐)](//nginx.org/en/download.html)
- [Apache](//httpd.apache.org)
- [Node.js](//nodejs.org)
- [IIS](//www.iis.net)

##### 以Nginx为例

1. 解压下载的zip文件
2. 进入含nginx.exe文件的页面
3. 在地址栏中输入```cmd```
4. 敲回车
5. 在cmd中输入start nginx.exe
6. 敲回车。
7. 最后进入[你的网站](http://localhost)

### 获取外网IP

<p>现在你能进去你的网站了，但别人该什么进入呢？<span id="ip"></span></p>
<script>
window.onload=function(){
$.get("https://ifconfig.me/ip")
.done(function(data){
  $("#ip").html('<a href="http://'+data+'">进入你的网站</a>');
})
.fail(function(){
  $("#ip").html("网址其实就是你的外网IP。");
});
}
</script>

### 还是进不去？

##### 方法一：关闭VPN

### 获取内网IP

如果使用路由器进行网络的连接

##### 方法一：通过命令

1. 打开以命令行程序
2. 在cmd中输入ipconfig
3. 敲回车
4. 肉眼查找192.168开头的文字

##### 方法二：通过设置

1. 打开设置
2. 查看网络属性
3. 肉眼查找192.168开头的文字

### 端口映射

端口映射是把外网IP地址的某一个端口映射到内网的某台主机的某个端口，比如你的服务器内网IP是192.168.0.2，那么只需要把192.168.0.2的80端口映射到公网的80端口就可以了。

1. 进入路由器的管理界面
2. 登入路由器
3. 进入端口映射或虚拟服务器界面

<table class="table table-bordered">
<thead>

<tr>
<th scope="col">内网IP</th>
<th scope="col">协议</th>
<th scope="col">内网端口</th>
<th scope="col">外网端口</th>
</tr>

</thead>
<tbody>

<tr>
<td>内网IP</td>
<td>ALL</td>
<td>80</td>
<td>80</td>
</tr>

</tbody>
</table>

如图所示: 

<picture>
<source type="image/webp" srcset="tenda.webp?v={{ "now" | date: "%s" }}">
<source type="image/jpeg" srcset="tenda.jpg?v={{ "now" | date: "%s" }}">
<img src="tenda.jpg?v={{ "now" | date: "%s" }}" class="img-fluid mb-3" alt="tenda">
</picture>

### 动态域名解析

因为IPV4资源很紧张，所以外网IP也都不是固定的，这就导致了今天进得去你的网站，可是每天就会进不去，所以这就需要动态域名解析了。动态域名解析将用户的动态IP地址映射到一个固定的域名解析服务上，用户每次连接网络的时候客户端程序就会通过信息传递把该主机的实时IP地址传送给位于服务商主机上的服务器程序，而服务器程序负责提供DNS服务并实现动态域名解析。这样我们只要在外部输入我们的域名就可以访问了，即便IP换了也是一样的。

### 内网穿透

除了外网IP不固定，还有一个问题，网络运营商为了降低成本，会分配虚拟外网IP给你，这就导致访问外网IP时，进去的不是你的网站，而是运营商的网站，所以这就需要内网穿透了，其原理和动态域名解析类似。当然也可以加钱向运营商申请。

- [Ngrok](//ngrok.com)
- [Ssh](//www.harding.motd.ca/autossh/)
- [Natapp](//natapp.cn)
- [Sakura Frp](//www.natfrp.com)
- [Frp](//github.com/fatedier/frp)
- [Lanproxy](//github.com/ffay/lanproxy)
- [Spike](//github.com/slince/spike)
- [花生壳](//hsk.oray.com)
