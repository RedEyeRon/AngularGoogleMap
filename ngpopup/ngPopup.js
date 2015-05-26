


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>ngPopup/ngPopup.js at master · MarkoCen/ngPopup · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="MarkoCen/ngPopup" name="twitter:title" /><meta content="ngPopup - An Angular modeless dialog, without jQuery dependency , super easy to use, and has fully customized theme." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/8303274?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/8303274?v=3&amp;s=400" property="og:image" /><meta content="MarkoCen/ngPopup" property="og:title" /><meta content="https://github.com/MarkoCen/ngPopup" property="og:url" /><meta content="ngPopup - An Angular modeless dialog, without jQuery dependency , super easy to use, and has fully customized theme." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="18F9BEE1:7040:25070A9:555E7D69" name="octolytics-dimension-request_id" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged Out">
    <meta class="js-ga-set" name="dimension2" content="Header v3">
    <meta name="is-dotcom" content="true">
      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="PHDVrS23yFp4pan0VyA+ZI8JedvgL6uf3UnDJlMo4bClD9b+bH6AsKfamBD3jzRTi3gFgzLadK0RBrKp+RgyQA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github/index-cfbd527cae2c39b53795cf6a8e65d5557c7e24e3d56b67715f7ae15ea22357bf.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2/index-41e08359702e377d30a8255ab3b197f5f3365a9db813ea64b629ebd72ee7761a.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="7fc176257d63090ee6378e931a73ea05">

      
  <meta name="description" content="ngPopup - An Angular modeless dialog, without jQuery dependency , super easy to use, and has fully customized theme.">
  <meta name="go-import" content="github.com/MarkoCen/ngPopup git https://github.com/MarkoCen/ngPopup.git">

  <meta content="8303274" name="octolytics-dimension-user_id" /><meta content="MarkoCen" name="octolytics-dimension-user_login" /><meta content="28680410" name="octolytics-dimension-repository_id" /><meta content="MarkoCen/ngPopup" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="28680410" name="octolytics-dimension-repository_network_root_id" /><meta content="MarkoCen/ngPopup" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/MarkoCen/ngPopup/commits/master.atom" rel="alternate" title="Recent Commits to ngPopup:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        
        <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2FMarkoCen%2FngPopup%2Fblob%2Fmaster%2Fdist%2FngPopup.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <form accept-charset="UTF-8" action="/MarkoCen/ngPopup/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/MarkoCen/ngPopup/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="(Logged out) Header, go to blog, text:blog">Blog</a>
          </li>
      </ul>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2FMarkoCen%2FngPopup"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/MarkoCen/ngPopup/watchers">
    1
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2FMarkoCen%2FngPopup"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/MarkoCen/ngPopup/stargazers">
      0
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2FMarkoCen%2FngPopup"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/MarkoCen/ngPopup/network" class="social-count">
        0
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/MarkoCen" class="url fn" itemprop="url" rel="author"><span itemprop="title">MarkoCen</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/MarkoCen/ngPopup" class="js-current-repository" data-pjax="#js-repo-pjax-container">ngPopup</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/MarkoCen/ngPopup/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/MarkoCen/ngPopup" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /MarkoCen/ngPopup">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/MarkoCen/ngPopup/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /MarkoCen/ngPopup/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/MarkoCen/ngPopup/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /MarkoCen/ngPopup/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/MarkoCen/ngPopup/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /MarkoCen/ngPopup/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/MarkoCen/ngPopup/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /MarkoCen/ngPopup/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/MarkoCen/ngPopup/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /MarkoCen/ngPopup/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/MarkoCen/ngPopup.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/MarkoCen/ngPopup" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a> or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="https://windows.github.com" class="btn btn-sm sidebar-button" title="Save MarkoCen/ngPopup to your computer and use it in GitHub Desktop." aria-label="Save MarkoCen/ngPopup to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/MarkoCen/ngPopup/archive/master.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of MarkoCen/ngPopup as a zip file"
                   title="Download the contents of MarkoCen/ngPopup as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          

<a href="/MarkoCen/ngPopup/blob/1aa14ebec2b009e2d679869aeb8e61fcefc37981/dist/ngPopup.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:b1e61edc0bdd9f850e76de55cb3b004f -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/MarkoCen/ngPopup/blob/master/dist/ngPopup.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/MarkoCen/ngPopup/tree/v0.3.0/dist/ngPopup.js"
                 data-name="v0.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.3.0">v0.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/MarkoCen/ngPopup/tree/v0.2.0/dist/ngPopup.js"
                 data-name="v0.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.2.0">v0.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/MarkoCen/ngPopup/tree/v0.1.2/dist/ngPopup.js"
                 data-name="v0.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.1.2">v0.1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/MarkoCen/ngPopup/tree/v0.1.1/dist/ngPopup.js"
                 data-name="v0.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.1.1">v0.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/MarkoCen/ngPopup/tree/v0.1.0/dist/ngPopup.js"
                 data-name="v0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.1.0">v0.1.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/MarkoCen/ngPopup/find/master"
          class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/MarkoCen/ngPopup" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">ngPopup</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/MarkoCen/ngPopup/tree/master/dist" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">dist</span></a></span><span class="separator">/</span><strong class="final-path">ngPopup.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="@MarkoCen" class="avatar" data-user="8303274" height="24" src="https://avatars3.githubusercontent.com/u/8303274?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/MarkoCen" rel="author">MarkoCen</a></span>
        <time datetime="2015-02-05T03:42:28Z" is="relative-time">Feb 4, 2015</time>
        <div class="commit-title">
            <a href="/MarkoCen/ngPopup/commit/35d7f3376db928e530cb3ec7d3198d62d1d0df0e" class="message" data-pjax="true" title="add initDone flag">add initDone flag</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>1</strong>
           contributor
        </a>
      </p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="@MarkoCen" data-user="8303274" height="24" src="https://avatars3.githubusercontent.com/u/8303274?v=3&amp;s=48" width="24" />
            <a href="/MarkoCen">MarkoCen</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">

      <div class="btn-group">
        <a href="/MarkoCen/ngPopup/raw/master/dist/ngPopup.js" class="btn btn-sm " id="raw-url">Raw</a>
          <a href="/MarkoCen/ngPopup/blame/master/dist/ngPopup.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
        <a href="/MarkoCen/ngPopup/commits/master/dist/ngPopup.js" class="btn btn-sm " rel="nofollow">History</a>
      </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub for Windows"
           data-ga-click="Repository, open with desktop, type:windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

          <button type="button" class="octicon-btn disabled tooltipped tooltipped-n" aria-label="You must be signed in to make or propose changes">
            <span class="octicon octicon-pencil"></span>
          </button>

        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-n" aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </button>
    </div>

    <div class="file-info">
        456 lines (422 sloc)
        <span class="file-info-divider"></span>
      22.487 kb
    </div>
  </div>
  
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> ngPopup <span class="pl-k">=</span> angular.module(<span class="pl-s"><span class="pl-pds">&quot;</span>ngPopup<span class="pl-pds">&quot;</span></span>,[ ]); ngPopup.directive(<span class="pl-s"><span class="pl-pds">&quot;</span>ngPopUp<span class="pl-pds">&quot;</span></span>,<span class="pl-k">function</span>(<span class="pl-smi">$parse</span>,<span class="pl-smi">$document</span>,<span class="pl-smi">$templateCache</span>, <span class="pl-smi">$compile</span>, <span class="pl-smi">ngPopupBuilder</span>){</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span>{</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">        restrict<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>EA<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">        scope<span class="pl-k">:</span><span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">        replace<span class="pl-k">:</span><span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">        template<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;ngPopup&quot; ng-show=&quot;_option.isShow&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">link</span>: <span class="pl-k">function</span>(<span class="pl-smi">scope</span>, <span class="pl-smi">element</span>, <span class="pl-smi">attrs</span>){</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> $element <span class="pl-k">=</span> element[<span class="pl-c1">0</span>]</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">                ,$option <span class="pl-k">=</span> (scope.$parent.$<span class="pl-c1">eval</span>(attrs.option) <span class="pl-k">==</span> <span class="pl-c1">null</span>) <span class="pl-k">?</span> ngPopupBuilder.getDefaultOptions() <span class="pl-k">:</span> scope.$parent.$<span class="pl-c1">eval</span>(attrs.option)</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">                ,modelName <span class="pl-k">=</span> $<span class="pl-c1">parse</span>($option.modelName)</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">                ,dragStartFlag <span class="pl-k">=</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">                ,resizeStartFlag <span class="pl-k">=</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">                ,initDone <span class="pl-k">=</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">                ,linkParams <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">                    scope<span class="pl-k">:</span> scope,</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">                    element<span class="pl-k">:</span> element,</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">                    attrs<span class="pl-k">:</span> attrs</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">                };</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">            ngPopupBuilder.layoutInitAsync($option,attrs.option).then(<span class="pl-k">function</span>(<span class="pl-smi">html</span>){</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> compiledHtml <span class="pl-k">=</span> $<span class="pl-c1">compile</span>(html)(scope.$parent);</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">                element.append(compiledHtml);</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">                ngPopupBuilder.updateBindingValue($option,ngPopupBuilder.getDefaultOptions(), linkParams);</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">                initDone <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">            scope._option <span class="pl-k">=</span> $option;</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">            scope.$<span class="pl-c1">watch</span>(attrs.option,<span class="pl-k">function</span>(<span class="pl-smi">newValue</span>, <span class="pl-smi">oldValue</span>){</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(initDone) ngPopupBuilder.updateBindingValue(newValue,oldValue, linkParams);</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">            },<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">            modelName.assign(scope.$parent, ngPopupBuilder.getDefaultMethods($option,element,scope.$parent));</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">            element.bind(<span class="pl-s"><span class="pl-pds">&quot;</span>mousedown<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">event</span>){</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> target <span class="pl-k">=</span> angular.element(<span class="pl-c1">event</span>.<span class="pl-c1">target</span>)</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">                    ,targetTop <span class="pl-k">=</span> <span class="pl-c1">parseFloat</span>(<span class="pl-c1">window</span>.getComputedStyle($element,<span class="pl-c1">null</span>)[<span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>])</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">                    ,targetLeft <span class="pl-k">=</span> <span class="pl-c1">parseFloat</span>(<span class="pl-c1">window</span>.getComputedStyle($element,<span class="pl-c1">null</span>)[<span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span>])</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">                    ,targetHeight <span class="pl-k">=</span> <span class="pl-c1">parseFloat</span>(<span class="pl-c1">window</span>.getComputedStyle($element,<span class="pl-c1">null</span>)[<span class="pl-s"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span>])</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">                    ,targetWidth <span class="pl-k">=</span> <span class="pl-c1">parseFloat</span>(<span class="pl-c1">window</span>.getComputedStyle($element,<span class="pl-c1">null</span>)[<span class="pl-s"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>])</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">                    ,origY <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageY</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">                    ,origX <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageX</span>;</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(target.hasClass(<span class="pl-s"><span class="pl-pds">&#39;</span>titleBar<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> target.hasClass(<span class="pl-s"><span class="pl-pds">&#39;</span>title<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> target.<span class="pl-c1">parent</span>().hasClass(<span class="pl-s"><span class="pl-pds">&#39;</span>contentNoBar<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>($option.draggable <span class="pl-k">==</span> <span class="pl-c1">false</span>) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>($option.onDragStart){</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">                        $option.onDragStart();</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">                        dragStartFlag <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">                    $document.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>).addClass(<span class="pl-s"><span class="pl-pds">&#39;</span>unselectable<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">                    $document.bind(<span class="pl-s"><span class="pl-pds">&quot;</span>mousemove<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">                        $element.<span class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageY</span> <span class="pl-k">-</span> origY <span class="pl-k">+</span> targetTop <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">                        $element.<span class="pl-c1">style</span>.<span class="pl-c1">left</span> <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageX</span> <span class="pl-k">-</span> origX <span class="pl-k">+</span> targetLeft <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">                        ngPopupBuilder.updateParentScopeOptions($option,element);</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">                        ngPopupBuilder.callParentScopeApply(scope.$parent);</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">                    })</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(target.<span class="pl-c1">parent</span>().hasClass(<span class="pl-s"><span class="pl-pds">&#39;</span>resizeCorner<span class="pl-pds">&#39;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>($option.resizable <span class="pl-k">==</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">                        $document.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>).removeClass(<span class="pl-s"><span class="pl-pds">&#39;</span>unselectable<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>($option.<span class="pl-c1">onResize</span>){</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">                        $option.<span class="pl-c1">onResize</span>();</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">                        resizeStartFlag <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">                    $document.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>).addClass(<span class="pl-s"><span class="pl-pds">&#39;</span>unselectable<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>(target.hasClass(<span class="pl-s"><span class="pl-pds">&quot;</span>right-bottom-corner<span class="pl-pds">&quot;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">                        $document.bind(<span class="pl-s"><span class="pl-pds">&quot;</span>mousemove<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">                            $element.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageY</span> <span class="pl-k">-</span> targetTop  <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">                            $element.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span>  <span class="pl-c1">event</span>.<span class="pl-c1">pageX</span> <span class="pl-k">-</span> targetLeft <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">                            ngPopupBuilder.updateParentScopeOptions($option,element);</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">                            ngPopupBuilder.callParentScopeApply(scope.$parent);</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">                        })</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">else</span> <span class="pl-k">if</span>(target.hasClass(<span class="pl-s"><span class="pl-pds">&quot;</span>right-top-corner<span class="pl-pds">&quot;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">                        $document.bind(<span class="pl-s"><span class="pl-pds">&quot;</span>mousemove<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">                            $element.<span class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageY</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">                            $element.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> targetWidth <span class="pl-k">+</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageX</span> <span class="pl-k">-</span> origX <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">                            $element.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> targetHeight <span class="pl-k">-</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageY</span> <span class="pl-k">+</span> origY <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">                            ngPopupBuilder.updateParentScopeOptions($option,element);</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">                            ngPopupBuilder.callParentScopeApply(scope.$parent);</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">                        })</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">else</span> <span class="pl-k">if</span>(target.hasClass(<span class="pl-s"><span class="pl-pds">&quot;</span>left-top-corner<span class="pl-pds">&quot;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">                        $document.bind(<span class="pl-s"><span class="pl-pds">&quot;</span>mousemove<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">                            $element.<span class="pl-c1">style</span>.<span class="pl-c1">left</span> <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageX</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">                            $element.<span class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageY</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">                            $element.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> targetWidth <span class="pl-k">-</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageX</span> <span class="pl-k">+</span> origX <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">                            $element.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> targetHeight <span class="pl-k">-</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageY</span> <span class="pl-k">+</span> origY <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">                            ngPopupBuilder.updateParentScopeOptions($option,element);</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">                            ngPopupBuilder.callParentScopeApply(scope.$parent);</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">                        })</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">else</span> <span class="pl-k">if</span>(target.hasClass(<span class="pl-s"><span class="pl-pds">&quot;</span>left-bottom-corner<span class="pl-pds">&quot;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">                        $document.bind(<span class="pl-s"><span class="pl-pds">&quot;</span>mousemove<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">                            $element.<span class="pl-c1">style</span>.<span class="pl-c1">left</span> <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageX</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">                            $element.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> targetWidth <span class="pl-k">-</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageX</span> <span class="pl-k">+</span> origX <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">                            $element.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> targetHeight <span class="pl-k">+</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageY</span> <span class="pl-k">-</span> origY <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">                            ngPopupBuilder.updateParentScopeOptions($option,element);</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">                            ngPopupBuilder.callParentScopeApply(scope.$parent);</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">                        })</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(target.<span class="pl-c1">parent</span>().hasClass(<span class="pl-s"><span class="pl-pds">&#39;</span>resizeBar<span class="pl-pds">&#39;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>($option.resizable <span class="pl-k">==</span> <span class="pl-c1">false</span>)  { $document.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>).removeClass(<span class="pl-s"><span class="pl-pds">&#39;</span>unselectable<span class="pl-pds">&#39;</span></span>); <span class="pl-k">return</span>;}</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>($option.<span class="pl-c1">onResize</span>){</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">                        $option.<span class="pl-c1">onResize</span>();</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">                        resizeStartFlag <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">                    $document.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>).addClass(<span class="pl-s"><span class="pl-pds">&#39;</span>unselectable<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>(target.hasClass(<span class="pl-s"><span class="pl-pds">&#39;</span>left-bar<span class="pl-pds">&#39;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">                        $document.bind(<span class="pl-s"><span class="pl-pds">&quot;</span>mousemove<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">                            $element.<span class="pl-c1">style</span>.<span class="pl-c1">left</span> <span class="pl-k">=</span> targetLeft <span class="pl-k">+</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageX</span> <span class="pl-k">-</span> origX <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">                            $element.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> targetWidth <span class="pl-k">-</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageX</span> <span class="pl-k">+</span> origX <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">                            ngPopupBuilder.updateParentScopeOptions($option,element);</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">                            ngPopupBuilder.callParentScopeApply(scope.$parent);</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">                        })</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">else</span> <span class="pl-k">if</span>(target.hasClass(<span class="pl-s"><span class="pl-pds">&#39;</span>right-bar<span class="pl-pds">&#39;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">                        $document.bind(<span class="pl-s"><span class="pl-pds">&quot;</span>mousemove<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">                            $element.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> targetWidth <span class="pl-k">+</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageX</span> <span class="pl-k">-</span> origX <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">                            ngPopupBuilder.updateParentScopeOptions($option,element);</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">                            ngPopupBuilder.callParentScopeApply(scope.$parent);</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">                        })</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">else</span> <span class="pl-k">if</span>(target.hasClass(<span class="pl-s"><span class="pl-pds">&#39;</span>top-bar<span class="pl-pds">&#39;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">                        $document.bind(<span class="pl-s"><span class="pl-pds">&quot;</span>mousemove<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">                            $element.<span class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageY</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">                            $element.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> targetHeight <span class="pl-k">-</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageY</span> <span class="pl-k">+</span> origY <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">                            ngPopupBuilder.updateParentScopeOptions($option,element);</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">                            ngPopupBuilder.callParentScopeApply(scope.$parent);</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">                        })</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">else</span> <span class="pl-k">if</span>(target.hasClass(<span class="pl-s"><span class="pl-pds">&#39;</span>bottom-bar<span class="pl-pds">&#39;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">                        $document.bind(<span class="pl-s"><span class="pl-pds">&quot;</span>mousemove<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">                            $element.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> targetHeight <span class="pl-k">+</span> <span class="pl-c1">event</span>.<span class="pl-c1">pageY</span> <span class="pl-k">-</span> origY <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">                            ngPopupBuilder.updateParentScopeOptions($option,element);</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">                            ngPopupBuilder.callParentScopeApply(scope.$parent);</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">                        })</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">            element.bind(<span class="pl-s"><span class="pl-pds">&quot;</span>mouseup<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">event</span>){</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>($option.onDragEnd <span class="pl-k">&amp;&amp;</span> dragStartFlag){</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">                    $option.onDragEnd();</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">                    dragStartFlag <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">                    resizeStartFlag <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">                $document.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>).removeClass(<span class="pl-s"><span class="pl-pds">&#39;</span>unselectable<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">                $document.unbind(<span class="pl-s"><span class="pl-pds">&quot;</span>mousemove<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">            })</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">}); ngPopup.factory(<span class="pl-s"><span class="pl-pds">&quot;</span>ngPopupBuilder<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">$q</span>, <span class="pl-smi">$http</span>, <span class="pl-smi">$document</span>,<span class="pl-smi">$log</span>, <span class="pl-smi">$compile</span>){</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> isMax <span class="pl-k">=</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">        ,isMin <span class="pl-k">=</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">        ,tempHeight <span class="pl-k">=</span> <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">        ,tempWidth <span class="pl-k">=</span> <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">        ,ngPopupBuilder <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">layoutInit</span>: <span class="pl-k">function</span>(<span class="pl-smi">option</span>,<span class="pl-smi">optionName</span>){</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> templateHtml <span class="pl-k">=</span> (option.template) <span class="pl-k">?</span> option.template <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">                ,templateUrlHtml <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">                ,html <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;container&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;resizeCorner&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;left-top-corner&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;left-bottom-corner&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;right-top-corner&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;right-bottom-corner&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;resizeBar&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;top-bar&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;right-bar&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;bottom-bar&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;left-bar&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;titleBar&quot; ng-show=&quot;{{<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> optionName <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.hasTitleBar || !<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> optionName <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>.hasOwnProperty(&amp;quot;hasTitleBar&amp;quot;)}}&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span class=&quot;title&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>option.<span class="pl-c1">title</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/span&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;iconGroup&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span class=&quot;glyphicon glyphicon-minus&quot; ng-click=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> option.modelName <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.minimize($event)&gt;&lt;/span&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span class=&quot;glyphicon glyphicon-resize-full&quot; ng-click=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> option.modelName <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.maximize($event)&gt;&lt;/span&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span class=&quot;glyphicon glyphicon-pushpin&quot; ng-click=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> option.modelName <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.togglePin($event)&gt;&lt;/span&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span class=&quot;glyphicon glyphicon-remove&quot; ng-click= <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> option.modelName <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.close($event)&gt;&lt;/span&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;content&quot; ng-class=&quot;{<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>contentNoBar<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>:{{!<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> optionName<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>.hasTitleBar &amp;&amp;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> optionName <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>.hasOwnProperty(&amp;quot;hasTitleBar&amp;quot;)}} }&quot;&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(option.templateUrl) {</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> xmlHttpRequest <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">XMLHttpRequest</span>();</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">xmlHttpRequest</span>.<span class="pl-en">onreadystatechange</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (xmlHttpRequest.<span class="pl-c1">readyState</span> <span class="pl-k">==</span> <span class="pl-c1">4</span> <span class="pl-k">&amp;&amp;</span> xmlHttpRequest.<span class="pl-c1">status</span> <span class="pl-k">==</span> <span class="pl-c1">200</span>) {</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">                        templateUrlHtml <span class="pl-k">=</span> xmlHttpRequest.<span class="pl-c1">responseText</span>;</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">                xmlHttpRequest.<span class="pl-c1">open</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>GET<span class="pl-pds">&quot;</span></span>, option.templateUrl, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">                xmlHttpRequest.<span class="pl-c1">send</span>(<span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">            html <span class="pl-k">+=</span>templateHtml <span class="pl-k">+</span> templateUrlHtml <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> html;</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">layoutInitAsync</span>: <span class="pl-k">function</span>(<span class="pl-smi">option</span>,<span class="pl-smi">optionName</span>){</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> templateHtml <span class="pl-k">=</span> (option.template) <span class="pl-k">?</span> option.template <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">                ,deferred <span class="pl-k">=</span> $q.<span class="pl-c1">defer</span>()</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">                ,html <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;container&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;resizeCorner&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;left-top-corner&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;left-bottom-corner&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;right-top-corner&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;right-bottom-corner&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;resizeBar&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;top-bar&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;right-bar&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;bottom-bar&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;left-bar&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;titleBar&quot; ng-show=&quot;{{<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> optionName <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.hasTitleBar || !<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> optionName <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>.hasOwnProperty(&amp;quot;hasTitleBar&amp;quot;)}}&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span class=&quot;title&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>option.<span class="pl-c1">title</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/span&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;iconGroup&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span class=&quot;glyphicon glyphicon-minus&quot; ng-click=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> option.modelName <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.minimize($event)&gt;&lt;/span&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span class=&quot;glyphicon glyphicon-resize-full&quot; ng-click=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> option.modelName <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.maximize($event)&gt;&lt;/span&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span class=&quot;glyphicon glyphicon-pushpin&quot; ng-click=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> option.modelName <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.togglePin($event)&gt;&lt;/span&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span class=&quot;glyphicon glyphicon-remove&quot; ng-click= <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> option.modelName <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.close($event)&gt;&lt;/span&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;content&quot; ng-class=&quot;{<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>contentNoBar<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>:{{!<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> optionName<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>.hasTitleBar &amp;&amp;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> optionName <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>.hasOwnProperty(&amp;quot;hasTitleBar&amp;quot;)}} }&quot;&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(option.templateUrl) {</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">                $http.get(option.templateUrl).then(<span class="pl-k">function</span>(<span class="pl-smi">templateUrlHtml</span>){</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">                        html <span class="pl-k">+=</span> templateHtml <span class="pl-k">+</span> templateUrlHtml.<span class="pl-c1">data</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">                        deferred.resolve(html);</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">                },</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">function</span>(<span class="pl-smi">reason</span>){</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">                    $log<span class="pl-c1">.log</span>(reason);</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">                    deferred.reject(reason);</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">                html <span class="pl-k">+=</span> templateHtml <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">                deferred.resolve(html);</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> deferred.promise;</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">getDefaultMethods</span>: <span class="pl-k">function</span>(<span class="pl-smi">options</span>,<span class="pl-smi">element</span>){</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> $element <span class="pl-k">=</span> element[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> fun <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">open</span>: <span class="pl-k">function</span>(<span class="pl-smi">newPosition</span>){</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>(newPosition <span class="pl-k">!=</span> <span class="pl-c1">null</span>){</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">                        $element.<span class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> newPosition.<span class="pl-c1">top</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">                        $element.<span class="pl-c1">style</span>.<span class="pl-c1">left</span> <span class="pl-k">=</span> newPosition.<span class="pl-c1">left</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">                        options.position.<span class="pl-c1">top</span> <span class="pl-k">=</span> newPosition.<span class="pl-c1">top</span>;</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">                        options.position.<span class="pl-c1">left</span> <span class="pl-k">=</span> newPosition.<span class="pl-c1">left</span>;</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>(options.onOpen){</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">                        options.onOpen();</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">                    options.isShow <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">                },</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">close</span>: <span class="pl-k">function</span>(<span class="pl-smi">$event</span>){</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>(options.<span class="pl-c1">onClose</span>){</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">                        options.<span class="pl-c1">onClose</span>();</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">                    options.isShow <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">                },</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">maximize</span>: <span class="pl-k">function</span>(<span class="pl-smi">event</span>){</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>(<span class="pl-k">!</span>isMax) {</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">                        tempHeight <span class="pl-k">=</span> $element.offsetHeight;</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">                        tempWidth  <span class="pl-k">=</span> $element.offsetWidth;</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">                        $element.getElementsByClassName(<span class="pl-s"><span class="pl-pds">&#39;</span>content<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>].<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>block<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">                        $element.<span class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-c1">screenTop</span> <span class="pl-k">?</span> <span class="pl-c1">window</span>.<span class="pl-c1">screenTop</span> <span class="pl-k">:</span> <span class="pl-c1">window</span>.<span class="pl-c1">screenY</span> <span class="pl-k">+</span> <span class="pl-c1">10</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">                        $element.<span class="pl-c1">style</span>.<span class="pl-c1">left</span> <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-c1">screenLeft</span> <span class="pl-k">?</span> <span class="pl-c1">window</span>.<span class="pl-c1">screenLeft</span> <span class="pl-k">:</span> <span class="pl-c1">window</span>.<span class="pl-c1">screenX</span> <span class="pl-k">+</span> <span class="pl-c1">10</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">                        $element.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-c1">innerWidth</span> <span class="pl-k">-</span> <span class="pl-c1">30</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">                        $element.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-c1">innerHeight</span> <span class="pl-k">-</span> <span class="pl-c1">30</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">                        options.position.<span class="pl-c1">top</span> <span class="pl-k">=</span> $element.offsetTop;</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">                        options.position.<span class="pl-c1">left</span> <span class="pl-k">=</span> $element.offsetLeft;</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">                        options.<span class="pl-c1">width</span> <span class="pl-k">=</span> $element.offsetWidth;</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">                        options.<span class="pl-c1">height</span> <span class="pl-k">=</span> $element.offsetHeight;</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">                        isMax <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">                        angular.element(<span class="pl-c1">event</span>.<span class="pl-c1">target</span>).removeClass(<span class="pl-s"><span class="pl-pds">&#39;</span>glyphicon-resize-full<span class="pl-pds">&#39;</span></span>).addClass(<span class="pl-s"><span class="pl-pds">&#39;</span>glyphicon-resize-small<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">                        $element.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> tempHeight <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">                        $element.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> tempWidth <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">                        options.<span class="pl-c1">width</span> <span class="pl-k">=</span> $element.offsetWidth;</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">                        options.<span class="pl-c1">height</span> <span class="pl-k">=</span> $element.offsetHeight;</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">                        isMax <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">                        angular.element(<span class="pl-c1">event</span>.<span class="pl-c1">target</span>).removeClass(<span class="pl-s"><span class="pl-pds">&#39;</span>glyphicon-resize-small<span class="pl-pds">&#39;</span></span>).addClass(<span class="pl-s"><span class="pl-pds">&#39;</span>glyphicon-resize-full<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">                },</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">minimize</span>: <span class="pl-k">function</span>(<span class="pl-smi">event</span>){</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>($element.getElementsByClassName(<span class="pl-s"><span class="pl-pds">&#39;</span>content<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>].<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">                        $element.getElementsByClassName(<span class="pl-s"><span class="pl-pds">&#39;</span>content<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>].<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">                        $element.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> $element.getElementsByClassName(<span class="pl-s"><span class="pl-pds">&#39;</span>titleBar<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>].<span class="pl-c1">style</span>.<span class="pl-c1">height</span>;</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">                        $element.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>200px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">                        angular.element(<span class="pl-c1">event</span>.<span class="pl-c1">target</span>).removeClass(<span class="pl-s"><span class="pl-pds">&#39;</span>glyphicon-minus<span class="pl-pds">&#39;</span></span>).addClass(<span class="pl-s"><span class="pl-pds">&#39;</span>glyphicon-plus<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">                        isMin <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">                        $element.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> options.<span class="pl-c1">height</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">                        $element.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> options.<span class="pl-c1">width</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">                        $element.<span class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> options.position.<span class="pl-c1">top</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">                        $element.<span class="pl-c1">style</span>.<span class="pl-c1">left</span> <span class="pl-k">=</span> options.position.<span class="pl-c1">left</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">                        $element.getElementsByClassName(<span class="pl-s"><span class="pl-pds">&#39;</span>content<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>].<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>block<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">                        angular.element(<span class="pl-c1">event</span>.<span class="pl-c1">target</span>).removeClass(<span class="pl-s"><span class="pl-pds">&#39;</span>glyphicon-plus<span class="pl-pds">&#39;</span></span>).addClass(<span class="pl-s"><span class="pl-pds">&#39;</span>glyphicon-minus<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">                        options.position.<span class="pl-c1">top</span> <span class="pl-k">=</span>  $element.offsetTop;</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">                        options.position.<span class="pl-c1">left</span> <span class="pl-k">=</span> $element.offsetLeft;</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">                        isMin <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">                },</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">togglePin</span>: <span class="pl-k">function</span>(<span class="pl-smi">event</span>){</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>(options.pinned <span class="pl-k">!=</span> <span class="pl-c1">true</span>){</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c1">event</span>.<span class="pl-c1">target</span>.<span class="pl-c1">style</span>.<span class="pl-c1">color</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#EB5342<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">                        options.pinned <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">                        <span class="pl-en">console</span><span class="pl-c1">.log</span>($document[<span class="pl-c1">0</span>].<span class="pl-c1">body</span>.scrollTop);</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c1">event</span>.<span class="pl-c1">target</span>.<span class="pl-c1">style</span>.<span class="pl-c1">color</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">                        options.pinned <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">                },</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">setTitle</span>: <span class="pl-k">function</span>(<span class="pl-smi">newTitle</span>){</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">                    $element.getElementsByClassName(<span class="pl-s"><span class="pl-pds">&#39;</span>title<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>].innerHTML <span class="pl-k">=</span> newTitle;</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">                },</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">isMaximized</span>: <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> isMax;</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">                },</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">isMinimized</span>: <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> isMin;</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> fun;</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">getDefaultOptions</span>: <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> defaultOption <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">                modelName <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">                width <span class="pl-k">:</span> <span class="pl-c1">100</span>,</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">                height <span class="pl-k">:</span> <span class="pl-c1">100</span>,</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">                template<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>123<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">                templateUrl <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">                resizable <span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">                draggable <span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">                position <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">                    top <span class="pl-k">:</span> <span class="pl-c1">100</span>,</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">                    left <span class="pl-k">:</span> <span class="pl-c1">100</span></td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">                },</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">                title <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">                modal <span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">                pinned <span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">                isShow <span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">onOpen</span> : <span class="pl-k">function</span>(){},</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">onClose</span>  : <span class="pl-k">function</span>(){},</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">onDragStart</span> : <span class="pl-k">function</span>(){},</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">onDragEnd</span> : <span class="pl-k">function</span>(){},</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">onResize</span> : <span class="pl-k">function</span>(){}</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> defaultOption;</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">callParentScopeApply</span>: <span class="pl-k">function</span>(<span class="pl-smi">scope</span>){</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-k">!</span>scope.$$phase){</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">                scope.$<span class="pl-c1">apply</span>()</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">updateParentScopeOptions</span>: <span class="pl-k">function</span>(<span class="pl-smi">options</span>,<span class="pl-smi">element</span>){</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> $element <span class="pl-k">=</span> element[<span class="pl-c1">0</span>]</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">            options.position.<span class="pl-c1">top</span> <span class="pl-k">=</span>  $element.offsetTop;</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">            options.position.<span class="pl-c1">left</span> <span class="pl-k">=</span> $element.offsetLeft;</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>($element.getElementsByClassName(<span class="pl-s"><span class="pl-pds">&#39;</span>content<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>].<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">                options.<span class="pl-c1">width</span> <span class="pl-k">=</span> $element.offsetWidth;</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">                options.<span class="pl-c1">height</span> <span class="pl-k">=</span> $element.offsetHeight;</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">updateElementSize</span>: <span class="pl-k">function</span>(<span class="pl-smi">element</span>, <span class="pl-smi">width</span>, <span class="pl-smi">height</span>){</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> $element <span class="pl-k">=</span> element[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-k">typeof</span>(width) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(width.<span class="pl-c1">slice</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%<span class="pl-pds">&quot;</span></span>){</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">                    $element.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> width;</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">                }<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">                    $element.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(width, <span class="pl-c1">10</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-k">typeof</span>(width) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span>) $element.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> width <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-k">typeof</span>(height) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(height.<span class="pl-c1">slice</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%<span class="pl-pds">&quot;</span></span>){</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">                    $element.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> height;</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">                }<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">                    $element.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(height, <span class="pl-c1">10</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-k">typeof</span>(height) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span>) $element.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> height <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">updateElementPosition</span>: <span class="pl-k">function</span>(<span class="pl-smi">element</span>, <span class="pl-smi">position</span>){</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> $element <span class="pl-k">=</span> element[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-k">typeof</span>(position.<span class="pl-c1">top</span>) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) $element.<span class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> position.<span class="pl-c1">top</span>;</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-k">typeof</span>(position.<span class="pl-c1">top</span>) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span>) $element.<span class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> position.<span class="pl-c1">top</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-k">typeof</span>(position.<span class="pl-c1">left</span>) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) $element.<span class="pl-c1">style</span>.<span class="pl-c1">left</span> <span class="pl-k">=</span> position.<span class="pl-c1">left</span>;</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-k">typeof</span>(position.<span class="pl-c1">left</span>) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span>) $element.<span class="pl-c1">style</span>.<span class="pl-c1">left</span> <span class="pl-k">=</span> position.<span class="pl-c1">left</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">updateBindingValue</span>: <span class="pl-k">function</span>(<span class="pl-smi">newValue</span>, <span class="pl-smi">oldValue</span>, <span class="pl-smi">linkParams</span>){</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> scope <span class="pl-k">=</span> linkParams.<span class="pl-c1">scope</span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">                ,element <span class="pl-k">=</span> linkParams.element</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">                ,attrs <span class="pl-k">=</span> linkParams.attrs</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">                ,$element <span class="pl-k">=</span> element[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(newValue.pinned){</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">                $element.<span class="pl-c1">style</span>.position <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>fixed<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">                $element.<span class="pl-c1">style</span>.position <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>absolute<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-k">!</span>scope.$parent.$<span class="pl-c1">eval</span>(newValue.modelName).isMinimized()){</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">                ngPopupBuilder.updateElementSize(element, newValue.<span class="pl-c1">width</span>, newValue.<span class="pl-c1">height</span>);</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(newValue.position.<span class="pl-c1">top</span> <span class="pl-k">!=</span> oldValue.position.<span class="pl-c1">top</span> <span class="pl-k">||</span> newValue.position.<span class="pl-c1">left</span> <span class="pl-k">!=</span> newValue.position.<span class="pl-c1">left</span>){</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">                $element.<span class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> newValue.position.<span class="pl-c1">top</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">                $element.<span class="pl-c1">style</span>.<span class="pl-c1">left</span> <span class="pl-k">=</span> newValue.position.<span class="pl-c1">left</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(newValue.<span class="pl-c1">title</span> <span class="pl-k">!=</span> oldValue.<span class="pl-c1">title</span>){</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">                $element.getElementsByClassName(<span class="pl-s"><span class="pl-pds">&#39;</span>title<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>].innerHTML <span class="pl-k">=</span> newValue.<span class="pl-c1">title</span>;</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(newValue.isShow <span class="pl-k">!=</span> oldValue.isShow){</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(newValue.isShow){</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">                    newValue.onOpen();</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">                    newValue.<span class="pl-c1">onClose</span>();</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(((newValue.<span class="pl-c1">width</span> <span class="pl-k">!=</span> oldValue.<span class="pl-c1">width</span>) <span class="pl-k">||</span> (newValue.<span class="pl-c1">height</span> <span class="pl-k">!=</span> oldValue.<span class="pl-c1">height</span>))){</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(newValue.<span class="pl-c1">onResize</span>){</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">                    newValue.<span class="pl-c1">onResize</span>();</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(newValue.hasTitleBar <span class="pl-k">!=</span> oldValue.hasTitleBar){</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">                <span class="pl-v">this</span>.layoutInitAsync(newValue,attrs.option).then(<span class="pl-k">function</span>(<span class="pl-smi">html</span>){</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> compiledHtml <span class="pl-k">=</span> $<span class="pl-c1">compile</span>(html)(scope.$parent);</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">                    element.empty();</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">                    element.append(compiledHtml);</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> ngPopupBuilder;</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">});</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.04483s from github-fe143-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-447ce66a36506ebddc8e84b4e32a77f6062f3d3482e77dd21a77a01f0643ad98.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github/index-991c6e3570dd4bec2717ccbefb4d38e93871d54a7038c010fd30e8932aa10875.js"></script>
      
      
  </body>
</html>

