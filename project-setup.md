# Project Setup

## Plugin
### Svelte VSCode Plugin
This is a must, it is basically the only thing that does good syntax highlight around here. However, tricky thing. 

If I use svelte with tailwindcss, then it may mess up with this plugin's diagnostics. One specific warning about postcss cannot be turned off. So, I have to turn of diagnostics in the setting altogether. 

I don't really need that anyway. The compiler will give me enough information. 
