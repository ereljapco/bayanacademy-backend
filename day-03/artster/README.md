# Artster

A simple project that lets the user customize the font and text to be displayed in the terminal using figlet.

## Table of Contents

- [Screenshot](#screenshot)
- [Usage](#usage)
  - [Use own text](#use-own-text)
  - [Choose font](#choose-font)

## Screenshot

## Usage

Install dependecies.

```posh
npm i
```

Simple usage:

```posh
node artster.js
```

Output:

```
  _   _      _ _         __        __         _     _ _
 | | | | ___| | | ___    \ \      / /__  _ __| | __| | |
 | |_| |/ _ \ | |/ _ \    \ \ /\ / / _ \| '__| |/ _` | |
 |  _  |  __/ | | (_) |    \ V  V / (_) | |  | | (_| |_|
 |_| |_|\___|_|_|\___( )    \_/\_/ \___/|_|  |_|\__,_(_)
                     |/
```

### Use own text

Use own text:

```posh
node artster.js --text='Hello, sunshine!'
```

Output:

```
  _   _      _ _                              _     _            _
 | | | | ___| | | ___     ___ _   _ _ __  ___| |__ (_)_ __   ___| |
 | |_| |/ _ \ | |/ _ \   / __| | | | '_ \/ __| '_ \| | '_ \ / _ \ |
 |  _  |  __/ | | (_) |  \__ \ |_| | | | \__ \ | | | | | | |  __/_|
 |_| |_|\___|_|_|\___( ) |___/\__,_|_| |_|___/_| |_|_|_| |_|\___(_)
                     |/
```

### Choose font

Get the list of fonts:

```posh
node artster.js --fonts
```

Set the font:

```posh
node artster.js --font='Dancing Font'
```

Output:

```
  _   _  U _____ u  _       _       U  ___ u                     U  ___ u   ____      _      ____    _
 |'| |'| \| ___"|/ |"|     |"|       \/"_ \/      __        __    \/"_ \/U |  _"\ u  |"|    |  _"\ U|"|u
/| |_| |\ |  _|" U | | u U | | u     | | | |      \"\      /"/    | | | | \| |_) |/U | | u /| | | |\| |/
U|  _  |u | |___  \| |/__ \| |/__.-,_| |_| |      /\ \ /\ / /\.-,_| |_| |  |  _ <   \| |/__U| |_| |\|_|
 |_| |_|  |_____|  |_____| |_____|\_)-\___/_     U  \ V  V /  U\_)-\___/   |_| \_\   |_____||____/ u(_)
 //   \\  <<   >>  //  \\  //  \\      \\ (")    .-,_\ /\ /_,-.     \\     //   \\_  //  \\  |||_   |||_
(_") ("_)(__) (__)(_")("_)(_")("_)    (__) \|     \_)-'  '-(_/     (__)   (__)  (__)(_")("_)(__)_) (__)_)
```