GitHub 与 Astro：源码管理与在线部署

GitHub and Astro: Source Management and Online Deployment

001. GitHub 不支持原生运行 Astro 项目

GitHub Does Not Natively Run Astro Projects

中文

GitHub 可以存储完整的 Astro 项目，但不能直接运行 .astro 文件。

Astro 是一个基于 Node.js 的前端构建框架，需要通过编译将 .astro 文件转换成浏览器能够识别的 HTML、CSS 和 JavaScript。

因此，即使将整个项目上传到 GitHub，也不能直接获得在线预览效果。

English

GitHub can store a complete Astro project, but it cannot directly execute .astro files.

Astro is a frontend framework based on Node.js. It requires a build process to transform .astro files into browser-compatible HTML, CSS, and JavaScript.

Therefore, uploading the entire project to GitHub does not automatically provide an online preview.

---

002. node_modules 并不能解决在线预览问题

Uploading node_modules Does Not Enable Online Preview

中文

node_modules 存放的是项目所依赖的各种软件包，包括 Astro 运行和构建所需要的依赖。

但是，依赖文件本身并不具备执行环境。

即使将 node_modules 一并上传到 GitHub，也无法让 GitHub 仓库直接运行 Astro。

正确的方式是使用 GitHub Actions 提供构建环境，自动安装依赖并执行构建。

English

The node_modules directory contains the packages required by a project, including the dependencies needed to run and build Astro applications.

However, dependencies alone do not provide an execution environment.

Even if node_modules is uploaded to GitHub, the repository still cannot directly run Astro.

The proper approach is to use GitHub Actions to provide a build environment, install dependencies, and execute the build process automatically.

---

003. Astro 项目的正确部署流程

The Correct Deployment Workflow for Astro

中文

Astro 项目可以通过 GitHub Actions 与 GitHub Pages 实现自动部署。

基本流程：

将 Astro 源代码推送到 GitHub。

GitHub Actions 自动启动构建流程。

安装 Node.js 环境。

安装项目依赖。

执行 npm run build。

生成 dist 静态文件。

将构建结果部署到 GitHub Pages。

通过公开网址访问网站。

常用命令：

npm install
npm run build
npm run preview

其中：

npm install：安装项目依赖。

npm run build：构建静态网站。

npm run preview：本地预览构建结果。

English

Astro projects can be automatically deployed through GitHub Actions and GitHub Pages.

The basic workflow:

Push Astro source code to GitHub.

GitHub Actions starts the build process.

Set up the Node.js environment.

Install project dependencies.

Execute npm run build.

Generate static files in the dist directory.

Deploy the build output to GitHub Pages.

Access the website through its public URL.

Common commands:

npm install
npm run build
npm run preview

---

004. .gitignore 文件的作用

The Purpose of the .gitignore File

中文

.gitignore 是 Git 项目中的忽略规则文件，用于指定不需要纳入版本管理的文件和目录。

对于 Astro 项目，可以创建以下配置：

node_modules/
dist/
.astro/

其中：

node_modules/：项目依赖目录。

dist/：项目构建输出目录。

.astro/：Astro 本地缓存及相关生成文件。

创建方法：

打开项目根目录。

新建文件，命名为 .gitignore。

写入上述规则。

保存文件。

注意：.gitignore 只对尚未被 Git 跟踪的文件生效，不能自动删除已经上传到 GitHub 的文件。

English

.gitignore is a Git configuration file used to specify which files and directories should be excluded from version control.

For an Astro project, the following configuration is recommended:

node_modules/
dist/
.astro/

These entries represent:

node_modules/: Project dependencies.

dist/: Build output directory.

.astro/: Local Astro cache and generated files.

To create the file:

Open the project root directory.

Create a new file named .gitignore.

Add the rules above.

Save the file.

Note: .gitignore only applies to files that are not already tracked by Git. It does not automatically remove files previously uploaded to GitHub.

---

005. 删除已经上传的文件

Removing Previously Uploaded Files

中文

对于已经上传到 GitHub 的文件，仅仅添加 .gitignore 是不够的。

例如，已经上传的 node_modules 或 ZIP 压缩包，需要先从 Git 索引中移除。

可以使用以下命令：

git rm -r --cached node_modules

对于 ZIP 文件：

git rm --cached archive.zip

然后提交并推送修改。

git add .gitignore
git commit -m "Remove ignored files"
git push

这里的 --cached 非常重要，它表示从 Git 版本管理中移除文件，但保留本地文件。

如果文件已经存在于历史提交中，普通删除不会清除历史版本。

English

Adding .gitignore is not sufficient for files that have already been uploaded to GitHub.

For example, previously uploaded node_modules directories or ZIP archives must first be removed from the Git index.

For node_modules:

git rm -r --cached node_modules

For a ZIP archive:

git rm --cached archive.zip

Then commit and push the changes.

git add .gitignore
git commit -m "Remove ignored files"
git push

The --cached option is important because it removes files from Git tracking while keeping the local copies intact.

If files already exist in previous commits, ordinary deletion will not remove them from Git history.

---

006. ZIP 文件与加密

ZIP Archives and Encryption

中文

ZIP 文件上传到 GitHub 后，即使已经加密，也不意味着整个仓库变得安全。

加密压缩包可以保护其中的文件内容，但仍然需要注意：

仓库的公开或私有属性。

压缩包密码的安全性。

是否包含 API Token、私钥等敏感信息。

本次讨论中，决定暂时保留已经上传的加密 ZIP 文件，不再进行额外清理。

English

Uploading an encrypted ZIP archive to GitHub does not make the entire repository secure.

An encrypted archive can protect its contents, but several factors still require attention:

Whether the repository is public or private.

The security of the archive password.

Whether the archive contains sensitive information such as API tokens or private keys.

In this discussion, the decision was to keep the existing encrypted ZIP archive and postpone further cleanup.

---

核心总结 | Key Takeaways

GitHub 负责代码托管，Astro 负责项目构建，GitHub Actions 负责自动化构建，GitHub Pages 负责静态网站托管。

GitHub stores the source code, Astro builds the project, GitHub Actions automates the build process, and GitHub Pages hosts the resulting static website.

不要把源代码仓库当成运行环境，也不要把依赖文件当成执行环境。

A source code repository is not a runtime environment, and dependencies alone do not provide an execution environment.