import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {useNavigate, useSearchParams} from "react-router-dom";

const TOKEN_KEY = "temptoken"
const URL_LINK = "http://www.proyectomigala.earth"

export const WelcomePage = () => {

  const [pmId, setPmId] = useState("UNIQUE_ID")
  const [showSnackBar, setShowSnackBar] = useState(false)
  const animation = useRef<any>()

  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get(TOKEN_KEY)) {
      navigate("/")
    }

    console.log(searchParams.get(TOKEN_KEY))
  }, [searchParams])

  const handleCopy = () => {
    setShowSnackBar(true)

    navigator.clipboard.writeText(pmId).then()

    animation.current && clearTimeout(animation.current)
    animation.current = setTimeout(() => {
      setShowSnackBar(false)
    }, 3000)
  }

  const shareInWhatsapp = () => {
    window.open(`whatsapp://send?text=¿Quieres formar parte del cambio que México necesita? te invito a unirte a proyecto Migala ${URL_LINK}`, "_blank")
  }

  const downloadPMID = () => {
    const blob = new Blob([`Tu código de participación en el Proyecto Migala (PMID) es ${pmId}`], {type: "text/plain"});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "PMID.txt";
    a.click();
  }

  return (
    <WelcomeContainer>
      <WavesContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          preserveAspectRatio="xMaxYMax slice"
          viewBox="0 0 1440 320">
          <path fill="#5e1780"
                d="M0,192L60,192C120,192,240,192,360,181.3C480,171,600,149,720,170.7C840,192,960,256,1080,266.7C1200,277,1320,235,1380,213.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>


        </svg>
      </WavesContainer>

      <WelcomeCard>

        <WelcomeCardTitle> 👋🏽 Bienvenido a Proyecto Migala 👋🏽</WelcomeCardTitle>

        <WelcomeCardDescription>

          Es un gusto tenerte con nosotros a partir de ahora tu código de identificación (PMID)
          dentro del proyecto sera <UniqueId title="Copiar al portapapeles" onClick={handleCopy}>{pmId} 📄</UniqueId>.
          guarda bien este Id pues te sera de utilidad
          para participar en el proyecto.


        </WelcomeCardDescription>

        <Button title="Descargar PMID" onClick={downloadPMID}><b>Descargar PMID</b></Button>

        <SocialMediaContainer>

          <ShareOn>Invita a tus amigos a unirse a este proyecto</ShareOn>

          <WhatsappIcon title="Whatsapp" onClick={shareInWhatsapp}>
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39">
              <path fill="#00E676"
                    d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"></path>
              <path fill="#FFF"
                    d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"></path>
            </svg>
            <b>Whatsapp</b>
          </WhatsappIcon>

        </SocialMediaContainer>


      </WelcomeCard>

      <SnackBarCopy className={showSnackBar ? "show" : ""}> Texto copiado al portapapeles </SnackBarCopy>

    </WelcomeContainer>
  )

}

const WelcomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`

const WavesContainer = styled.div`
  width: 100%;
  height: 70vh;
`

const WelcomeCard = styled.div`
  background: rgba(255, 255, 255, 0.68);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: absolute;
  width: 85%;
  min-height: 40%;
  margin-top: 100px;
  z-index: 2;
  display: flex;
  gap: 30px;
  flex-flow: column nowrap;
  align-items: center;
  padding: 30px 50px;
`

const SnackBarCopy = styled.div`
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;

  &.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
  }

  /* Animations to fade the snackbar in and out */
  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
`

const WelcomeCardTitle = styled.span`
  font-weight: bolder;
  color: #412772;
  font-size: calc(24px + 3vmin);
  text-align: center;
`

const WelcomeCardDescription = styled.span`
  font-weight: normal;
  color: #412772;
  font-size: calc(12px + 2vmin);
  line-height: 30px;
`

const UniqueId = styled.b`
  cursor: pointer;
`

const Button = styled.button`
  background: #5e1780;
  color: white;
  font-size: medium;
  border: none;
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
`

const SocialMediaContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  align-self: start;
  padding-top: 50px;
`

const ShareOn = styled.span`
  align-self: start;
  font-weight: bold;
  color: #412772;
  font-size: calc(12px + 2vmin);
  line-height: 30px;
`

const WhatsappIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`

