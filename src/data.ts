import tp from "@/assets/Portfolio/Tp.png"
import Mdg from "@/assets/Portfolio/Mdg-Tour.png"
import ymca from "@/assets/Portfolio/ymca.png"
import type { Ref } from "vue"

export type AllStaticMode =  {
  img:string | HTMLImageElement,
  talent:number,
  scroll:number
}
export type Infinite_Caroussel = {
  img:string | HTMLImageElement,
  name:string,

}
export type Social = {
  img:string | HTMLImageElement,
  name:string,
  link : string

}
export type ServiceType = {
  description : string,
  list_of_image : Infinite_Caroussel[],
  link : string
}
export type Experiency = {
  enterprise : string,
  img : string | HTMLImageElement,
  description : string,
  list_of_image : Infinite_Caroussel[],
}
function Left_Right(data : "N" | "P" | "") {
  return data == "N" ? +10000 : -10000
}
export  function Scroll_inline(reference_x_scroll:Ref<null | HTMLElement>,text_for_btn:Ref<"N" | "P" | "">) {
    const temp_data = reference_x_scroll.value as HTMLElement
    console.log(text_for_btn.value)
    if(text_for_btn.value == "N") {
      temp_data.scrollTo({
        left : -10000, top : 0,behavior : "smooth"
      })
    } else {
      temp_data.scrollTo({
        left : 10000, top : 0,behavior : "smooth"
      })
    }
  }
export function Grid_Btn(reference_for_scroll:Ref<'1 / 2' | '1 / 3' |'2 / 3'>,reference_x_scroll:Ref<null | HTMLElement>,text_for_btn:Ref<"N" | "P" | ""> ) {
    text_for_btn.value = ""
    const temp = reference_for_scroll.value
    reference_for_scroll.value = "1 / 3"
    setTimeout(() => {
      reference_for_scroll.value = temp == "1 / 2" ? "2 / 3" : "1 / 2"
      text_for_btn.value = temp == "1 / 2" ? "P" : "N"
      Scroll_inline(reference_x_scroll,text_for_btn)
    }, 200)
  }

  export function Hide_Presentation_and_continue(a:Ref<"Continuer" | "Chargement...">) {
    a.value = "Chargement..."
  }

