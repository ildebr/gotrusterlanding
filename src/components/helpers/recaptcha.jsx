import { useEffect, useState } from 'react'
const SITE_KEY = '6LfgxjAaAAAAAG5xQzDpn1n8PGbizsFwvc_uA64U'
function Recaptcha() {
  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id)

      if (!isScriptExist) {
        let script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = url
        script.id = id
        script.onload = function () {
          if (callback) callback()
        }
        document.body.appendChild(script)
      }

      if (isScriptExist && callback) callback()
    }

    // load the script by passing the URL
    loadScriptByURL(
      'recaptcha-key',
      `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`,
      function () {
        console.log('Script loaded!')
      }
    )
  }, [])

  return null
}

export default Recaptcha
