import 'mozaik/ui.css'
import 'font-awesome/css/font-awesome.min.css'

import React         from 'react'
import { render }    from 'react-dom'
import Mozaik, { Registry, ThemeManager } from 'mozaik/ui'

import github        from 'mozaik-ext-github'
import travis        from 'mozaik-ext-travis'
import airtable      from 'mozaik-ext-airtable'
import json          from 'mozaik-ext-json'
//import gitlab        from 'mozaik-ext-gitlab'
//import analytics     from 'mozaik-ext-analytics'

import snow          from 'mozaik-themes/themes/snow'

import 'mozaik-themes/themes/snow.css'

ThemeManager.add(snow)

ThemeManager.defaultTheme = snow.name

Registry.addExtensions({
    github,
    travis,
    airtable,
    json,
    //gitlab,
    //analytics,
})

render(
    <Mozaik />,
    document.getElementById('mozaik')
)
