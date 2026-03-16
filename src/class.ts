import { ref, type Ref } from "vue"

import n8n from "@/assets/Portfolio/n8n.png"
import Gas from "@/assets/Portfolio/GAS.png"
import GW from "@/assets/Portfolio/GW.png"
import Excel from "@/assets/Portfolio/excel.png"
import sheet from "@/assets/Portfolio/sheet.png"
import flask from "@/assets/Portfolio/flask.png"
import fastapi from "@/assets/Portfolio/fastapi.png"
import sqla from "@/assets/Portfolio/sqla.png"
import pyside from "@/assets/Portfolio/pyside.png"
import vue from "@/assets/Portfolio/vue.png"
import  numpy from "@/assets/Portfolio/numpy.png"
import  pandas from "@/assets/Portfolio/pandas.png"
import  sheduler from "@/assets/Portfolio/sheduler_py.png"
import  selenium from "@/assets/Portfolio/selenium.png"
import github from "@/assets/Portfolio/github.png"
import vs_code from "@/assets/Portfolio/vs_code.png"
import google_cloud from "@/assets/Portfolio/google_cloud.png"
import postman from "@/assets/Portfolio/postman.png"
import docker from "@/assets/Portfolio/docker.png"
import mysql from "@/assets/Portfolio/mysql.png"
import figma from "@/assets/Portfolio/figma.png"
import sqlite from "@/assets/Portfolio/sqlite.png"
import linux from "@/assets/Portfolio/linux.png"
import micorosft from "@/assets/Portfolio/microsoft.png"
import adobe_creative from "@/assets/Portfolio/adobe_creative.png"
import bash from "@/assets/Portfolio/bash.png"
import mysql_workbench from "@/assets/Portfolio/mysql_workbench.png"
import drive from "@/assets/Portfolio/Drive.png"
import gmail from "@/assets/Portfolio/gmail.png"
import form from "@/assets/Portfolio/form.png"
import docs from "@/assets/Portfolio/docs.png"
import calendar from "@/assets/Portfolio/calendar.png"
import word from "@/assets/Portfolio/word.png"
import onedrive from "@/assets/Portfolio/onedrive.png"
import outlook from "@/assets/Portfolio/outlook.png"
import facebook from "@/assets/Portfolio/facebook.png"
import insta from "@/assets/Portfolio/insta.png"
import bot from "@/assets/Portfolio/bot.png"
import whatsapp from "@/assets/Portfolio/whatsapp.png"
import python from "@/assets/Portfolio/py.png"
import tp from "@/assets/Portfolio/Tp.png"
import Mdg from "@/assets/Portfolio/Mdg-Tour.png"
import ymca from "@/assets/Portfolio/ymca.png"
import other from "@/assets/Portfolio/other.png"
import react from "@/assets/Portfolio/react.png"
import typescript from "@/assets/Portfolio/ts.png"
import pinia from "@/assets/Portfolio/pinia.png"
import bootstrap from "@/assets/Portfolio/bootstrap.png"
import portfolio from "@/assets/Portfolio/portfolio.png"
import linkedin from "@/assets/Portfolio/in.png"
import type { AllStaticMode, Experiency, Infinite_Caroussel, ServiceType, Social } from "./data"

function Load_Image_In_Service_Type(a:Ref<ServiceType[]> | Ref<Experiency[]>) {
    for(const [key,element] of a.value.entries()) {
      for(const [key2,element2] of element.list_of_image.entries()) {
        const image = new Image()
        image.src = element2.img.toString()
        image.onload = () => {
          const service = a.value[key]
          if (service && service.list_of_image[key2]) {
            service.list_of_image[key2].img = image
          }
        }
      }
    }
}

function Load_Image(a:Ref<AllStaticMode[]> | Ref<Infinite_Caroussel[]> | Ref<Experiency[]>) {
    for(const [key,value] of a.value.entries()) {
      const image = new Image()
      image.src = value.img as string
      image.onload = () => {
        if (a.value[key]) {
          a.value[key].img = image
        }
      }
    }  
}

export class All_static_Data {
 all_data_for_automation:Ref<AllStaticMode[]> = ref([{img : n8n,  talent :80,scroll: 600},{  img : Gas,  talent :90,scroll: 650},{img : sheduler,talent : 95,scroll : 950},{img: selenium,talent : 90, scroll : 1000},{  img : GW,  talent :90,scroll: 700},{  img : Excel,  talent :80,scroll: 750},{  img : sheet,  talent :85,scroll: 800}])
 all_data_for_language:Ref<AllStaticMode[]>= ref([{img : numpy,talent: 90,scroll : 850},{img:pandas,talent : 95,scroll : 900},{  img : flask,  talent :90,scroll: 600},{  img : fastapi,  talent :80,scroll: 650},{ img : sqla,  talent :90,scroll: 700},{  img : pyside,  talent :80,scroll: 750},{  img : vue,  talent :90,scroll: 800}])
 infinite_caroussel:Ref<Infinite_Caroussel[]> = ref([{name : "github",img : github},{name : "vs_code",img : vs_code},{name: "google_cloud",img : google_cloud},{name : "figma", img : figma},{name : "linux", img : linux},{name : "micorosft",img  : micorosft},{name : "adobe_creative",img : adobe_creative},{name : "bash",img : bash},{name : "mysql_workbench",img : mysql_workbench},{name : "postman",img : postman},{name : "docker",img: docker},{name: "mysql",img : mysql},{name : "sqlite",img : sqlite}])
 all_service_and_image_loaded_for_automation:Ref<ServiceType[]> = ref([{link : "",description : "Un service d’automatisation bureautique dédié aux environnements Google Workspace et Microsoft Office permet d’optimiser les tâches répétitives et de réduire les erreurs humaines. Il connecte les applications, automatise les flux de travail (emails, documents, formulaires, données) et centralise les processus pour améliorer la productivité des équipes.",list_of_image : [{name : "drive",img : drive},{name : "gmail", img : gmail},{name : "GAS",img : Gas},{name : "sheet", img : sheet},{name : "form", img : form},{name : "docs",img : docs},{name : "calendar",img : calendar},{name : "word",img : word},{name : "Excel", img : Excel},{name : "outlook",img : outlook},{name : "onedrive", img : onedrive}]},{link : "",description : "Un service d’automatisation pour les réseaux sociaux et les chatbots permet de gérer efficacement la communication digitale sans intervention constante. Il planifie les publications, répond automatiquement aux messages et qualifie les prospects grâce à des agents conversationnels intelligents disponibles 24h/24.",list_of_image : [{name : "facebook",img : facebook},{name : "insta", img : insta},{name : "outlook",img : outlook},{name : "bot", img : bot},{name : "gmail", img : gmail},{name : "drive", img : drive},{name : "whatsapp", img : whatsapp}]}])
 all_service_and_image_loaded_for_dev_solution:Ref<ServiceType[]> = ref([{description : "Conception, développement, déploiement et maintenance d’applications web et d’outils numériques sur mesure, adaptés aux besoins des particuliers, startups et entreprises. Des solutions fiables, évolutives et sécurisées, pensées pour améliorer votre productivité, votre performance et votre présence digitale.",link : "",list_of_image : [{name : "python", img : python},{name : "flask", img : flask},{name : "fastapi", img : fastapi},{name : "vue",img : vue},{name : "figma", img : figma},{name : "adobe_creative",img : adobe_creative}]}])
 all_experiency_tech_or_no:Ref<Experiency[]> = ref([{enterprise: "CAP ON MADA | Madagascar-Tours",img : Mdg, description : "L’accompagnement d'une agence de voyage dans la conception et l’amélioration de toutes ces infrastructures numériques. Allant d’une application de présentation de l’agence au grand public en montrant une brève présentation de l’agence, de Madagascar les systèmes de réservation complète selon le contexte du client. Jusqu'à la conception de toute la partie administrative, la gestion des circuits.",list_of_image : [{name : "React",img: react},{name : "typescript",img : typescript},{name : "flask",img : flask},{name : "pyside",img : pyside},{name : "sqla",img :  sqla},{name : "mysql",img : mysql}]},{enterprise : "Y-TECH | YMCA", img: ymca,description : "Système automatisé de recrutement :Collecte, tri et filtrage automatique des candidatures selon le parcours choisi. Envoi automatique de tests personnalisés, calcul des scores et sélection des candidats qualifiés. Tout le processus est centralisé et suivi via un tableau de bord, avec notifications automatiques pour assurer un recrutement rapide, fiable et efficace.",list_of_image : [{name : "drive",img : drive},{name : "gmail", img : gmail},{name : "GAS",img : Gas},{name : "sheet", img : sheet},{name : "form", img : form},{name : "docs",img : docs},{name : "calendar",img : calendar},{name : "ChatBot", img : bot},{name : "n8n",img : n8n}]},{enterprise : "Automatisation | Benevolat",img : other,description : "Conception de systèmes automatisés pour simplifier et optimiser les tâches répétitives. Cela inclut : filtrage et réponse automatique aux emails, importation et traitement de fichiers selon des règles, gestion automatisée de formulaires Google Forms, suivi de données dans Google Sheets et émission d’événements contextuels selon des conditions définies. ",list_of_image : [{name : "drive",img : drive},{name : "gmail", img : gmail},{name : "GAS",img : Gas},{name : "sheet", img : sheet},{name : "form", img : form},{name : "docs",img : docs},{name : "calendar",img : calendar},{name : "ChatBot", img : bot},{name : "n8n",img : n8n},{name : "Facebook", img : facebook}]},{enterprise : "Personelle | Portfolio",img : portfolio,description : "Portfolio retraçant mon parcours de développeur full-stack et expert en automatisation, avec l'objectif de mettre la technologie au service de l'efficacité personnelle et de l'entraide communautaire. J'y présente des solutions concrètes — de la gestion de workflows complexes sur n8n à la création d'applications.",list_of_image : [{name : "vue", img : vue},{name : "pinia", img : pinia},{name : "bootstrap",img : bootstrap}]},{enterprise : "Teleperformance Madagascar",img : tp, description : "Assistant technique, Mes missions consistaient principalement à accompagner les clients en appel, être la première assistance en contact directe avec le client pour les assister dans ces problèmes et complications, allant d’une panne classique de internet Fibre jusqu’à des configuration d’interface dans des cas de VPN ou de PlayStation",list_of_image : []}])
 all_image_and_name_for_social:Ref<Social[]> = ref([{link : "mailto:jsdev.web2@gmail.com",name : "Gmail", img : gmail},{name : "Facebook",img : facebook,link : "https://web.facebook.com/profile.php?id=61561678853280"},{name : "linkedin",img : linkedin,link : "https://www.linkedin.com/in/sedraniaina-nomenjanahary-rakotoarimalala-a261b1361/"}])
 loading() {
      for(let element of [this.all_data_for_automation,this.all_data_for_language,this.infinite_caroussel,this.all_experiency_tech_or_no,this.all_image_and_name_for_social]) {
        Load_Image(element)
      }
      for(let element of [this.all_service_and_image_loaded_for_automation,this.all_service_and_image_loaded_for_dev_solution,this.all_experiency_tech_or_no]) {
        Load_Image_In_Service_Type(element)
      } 

    }
}

export class Props_For_Scroll {
    private event:Ref<number | null> = ref(null)
    set_value(e:number) {
        this.event.value = e
    }
    get_value() {
        if(this.event.value) return this.event.value
    }
}