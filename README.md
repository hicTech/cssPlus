<h1>
<a href="http://sailsjs.org"><img alt="css+ logo" src="http://hictech.github.io/cssPlusWebsite/img/cssPlusLogo.png" title="css+"/></a>
</h1>

<h4>Robust, fast and cross browser layout scaffolding based on Flexbox</h4>

### [Website](http://sailsjs.org/)  &nbsp; [Getting Started](http://sailsjs.org/#!getStarted) &nbsp;  [Docs](http://sailsjs.org/#!documentation)  &nbsp; [Submit Issue](https://github.com/balderdashy/sails/blob/master/README.md#issue-submission)


Css Plus want to provide a simple and fast way to realize flexible layout based on flexbox modeling. This awesome css feature lets you specify a flexible container within which direct children can be also flexible and float as columns or rows.

## Usage

Add this css file:
```html
<link rel="stylesheet" href="source/flex_layout-0.1.css">
```
Done!

Whit css+ you can create flexible layout like this:

<h1>
<a href="http://sailsjs.org"><img alt="css+ ui" src="http://hictech.github.io/cssPlusWebsite/img/ui_example.png" title="css+ ui"/></a>
</h1>


```html
<div class="EXTENDER" style="background-color: rgba(0,0,0,0.15)">
    <div class="ROWS">
        <div class="ROW COLS CENTER" style="height: 50px">
            <div class="COL" style="width: 90px">
                <div class="EXTENDER">
                    <div class="PADDER-CENTER">
                        <small>button</small>
                    </div>
                </div>
            </div>
            <div class="COL" style="width: 90px">
                <div class="EXTENDER">
                    <div class="PADDER-CENTER">
                        <small>button</small>
                    </div>
                </div>
            </div>
            <div class="COL" style="width: 90px">
                <div class="EXTENDER">
                    <div class="PADDER-CENTER">
                        <small>button</small>
                    </div>
                </div>
            </div>
            <div class="COL" style="width: 90px">
                <div class="EXTENDER">
                    <div class="PADDER-CENTER">
                        <small>button</small>
                    </div>
                </div>
            </div>
        </div>
        <div class="ROW-FLEX COLS" style="background-color: rgba(0,0,0,0.05)">
            <div class="COL" style="width: 150px; background-color: rgba(0,0,0,0.05); font-size: 16px; color: #ffffff">
                <div class="EXTENDER">
                    <div class="ROWS">
                        <div class="ROW-FLEX">
                            <div class="EXTENDER">
                                <div class="PADDER-CENTER"><span >Menu 1</span></div>
                            </div>
                        </div>
                        <div class="ROW-FLEX">
                            <div class="EXTENDER">
                                <div class="PADDER-CENTER"><span>Menu 2</span></div>
                            </div>
                        </div>
                        <div class="ROW-FLEX">
                            <div class="EXTENDER">
                                <div class="PADDER-CENTER"><span>Menu 3</span></div>
                            </div>
                        </div>
                        <div class="ROW-FLEX">
                            <div class="EXTENDER">
                                <div class="PADDER-CENTER"><span>Menu 4</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="COL-FLEX">
                <div class="EXTENDER">
                    <div class="PADDER15">... your stunning content ...</div>
                </div>
            </div>
        </div>
        <div class="ROW COLS END" style="height: 25px; color: #ffffff">
            <div class="COL"> options </div>
            <div class="COL" style="width: 30px; text-align: center"> | </div>
            <div class="COL"> options </div>
            <div class="COL" style="width: 30px; text-align: center"> | </div>
            <div class="COL"> options </div>
            <div class="COL" style="width: 30px; text-align: center"></div>
        </div>
    </div>
</div>
```