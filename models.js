// box model
<
!DOCTYPE html >
    <
    html >

    <
    head >
    <
    style >
    div {
        background - color: light grey;
        width: 200 px;
        border: 26 px solid blue;
        padding: 26 px;
        margin: 26 px;
    } <
    /style> < /
    head >

    <
    body >

    <
    h2 > The demonstration of the box model < /h2>

<
p > The box model consists of the margin, border, padding with some width and the background color. < /p>

<
div > In the box model, the background - color is white.the width is 200 px, border is given 26 px with blue color, margin is 26 px and the padding is 26 px. < /div>

<
/body>

<
/html>

//// inline style sheet
<
!DOCTYPE html >
    <
    html >

    <
    body >

    <
    h1 style = "color:grey;margin-left:45px;" > This is the inline style sheet < /h1> <
p > This is the third type of stylesheet. < /p>

<
/body>

<
/html>

/// external style
<
!DOCTYPE html >
    <
    html >

    <
    head >
    <
    link rel = "stylesheet"
type = "text/css"
href = "mystyle.css" >
    <
    /head>

<
body >
    background - color: lightblue;
}
h1 {
    color: navy;margin - left: 20 px;

    <
    h1 > This is demonstration < /h1> <
    p > This is demo. < /p>

    <
    /body>

    <
    /html>

    //// internal style
    <
    !DOCTYPE html >
    <
    html >

    <
    head >
    <
    style >
    body {
        background - color: white;
    }

    h1 {
        color: black;
        margin - left: 30 px;
    } <
    /style> < /
    head >

    <
    body >

    <
    h1 > This is internal stylesheet < /h1>

    <
    p > This is the second type of stylesheet. < /p>

    <
    /body>

    <
    /html>