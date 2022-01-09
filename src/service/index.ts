import { SurveyModel } from "survey-react";
import http from "./http";

/**
 * Función que parsea y manda las respuestas del formulario al API
 * @param sender Modelo del formulario
 */
export function handleOnCompleted(sender: SurveyModel) : void{  
  const data = sender.data;

  http.post(`/form`, {
    "tableName": "respuestas",
    "rows": [
      {
        acepto_aviso_privacidad: data.acepto_aviso_privacidad,
        name: data.como_nos_referimos_a_ti,
        email: data.correo_electronico,
        telefono_celular: data.telefono_celular,
        fecha_de_nacimiento: data.fecha_de_nacimiento,
        nacionalidad: data.nacionalidad,
        nombres: data.nombres,
        primer_apellido: data.primer_apellido,
        segundo_apellido: data.segundo_apellido,
        genero: data.genero,
        tienes_una_discapacidad: data.tienes_una_discapacidad,
        curp: data.curp,
        entidad_federativa: data.entidad_federativa,
        municipio_alcaldia: data.municipio_alcaldia,
        clave_elector: data.clave_elector,
        seccion_electoral: data.seccion_electoral,
        "ocupacion-Comment": data["ocupacion-Comment"] || "",
        ocupacion_1: data.ocupacion[0] ||  "",
        ocupacion_2:  data.ocupacion[1] || "",
        ocupacion_3: data.ocupacion[2] || "",
        grado_estudios: data.grado_estudios,
        "grado_estudios-Comment": data["grado_estudios-Comment"] || "",
        trabajas_en_lo_que_estudiaste: data["trabajas_en_lo_que_estudiaste"],
        especializacion_1: data.especializacion[0] || "",
        especializacion_2: data.especializacion[1] || "",
        especializacion_3: data.especializacion[2] || "",
        especializacion_4: data.especializacion[3] || "",
        especializacion_5: data.especializacion[4] || "",
        a_que_te_dedicas: data.a_que_te_dedicas,
        actividades_recreativas_1: data["actividades_recreativas"][0] || "",
        actividades_recreativas_2: data["actividades_recreativas"][1] || "",
        actividades_recreativas_3: data["actividades_recreativas"][2] || "",
        "actividades_recreativas-Comment": data["actividades_recreativas-Comment"] || "",
        actividades_especificas: data["actividades_especificas"],
        actividades_politicas_sociales_1: data["actividades_politicas_sociales"][0] || "",
        actividades_politicas_sociales_2: data["actividades_politicas_sociales"][1] || "",
        actividades_politicas_sociales_3: data["actividades_politicas_sociales"][2] || "",
        actividades_politicas_sociales_4: data["actividades_politicas_sociales"][3] || "",
        actividades_politicas_sociales_5: data["actividades_politicas_sociales"][4] || "",
        actividades_politicas_sociales_6: data["actividades_politicas_sociales"][5] || "",
        actividades_politicas_sociales_7: data["actividades_politicas_sociales"][6] || "",
        actividades_politicas_sociales_8: data["actividades_politicas_sociales"][7] || "",
        actividades_politicas_sociales_9: data["actividades_politicas_sociales"][8] || "",
        "actividades_politicas_sociales-Comment": data["actividades_politicas_sociales-Comment"],
        cuentanos_actividades_politicas_sociales: data["cuentanos_actividades_politicas_sociales"],
        oficio_conocimientos_tecnicos: data["oficio_conocimientos_tecnicos"],
        tipo_paticipacion: data["tipo_paticipacion"],
        actividades_a_integrarse_1: data["actividades_a_integrarse"][0] || "",
        actividades_a_integrarse_2: data["actividades_a_integrarse"][1] || "",
        actividades_a_integrarse_3: data["actividades_a_integrarse"][2] || "",
        "actividades_a_integrarse-Comment": data["actividades_a_integrarse-Comment"],
        participacion_disponibilidad_lunes: data["participacion_disponibilidad"]["lunes"],
        participacion_disponibilidad_martes: data["participacion_disponibilidad"]["martes"],
        participacion_disponibilidad_miercoles: data["participacion_disponibilidad"]["miercoles"],
        participacion_disponibilidad_jueves: data["participacion_disponibilidad"]["jueves"],
        participacion_disponibilidad_viernes: data["participacion_disponibilidad"]["viernes"],
        participacion_disponibilidad_sabado: data["participacion_disponibilidad"]["sabado"],
        participacion_disponibilidad_domingo: data["participacion_disponibilidad"]["domingo"],
        conexiones_1: data["conexiones"][0] || "",
        conexiones_2: data["conexiones"][1] || "",
        "conexiones-Comment": data["conexiones-Comment"],
        familiaridad_ti: data["familiaridad_ti"],
        aplicaciones_o_redes_1: data["aplicaciones_o_redes"][0] || "",
        aplicaciones_o_redes_2: data["aplicaciones_o_redes"][1] || "",
        aplicaciones_o_redes_3: data["aplicaciones_o_redes"][2] || "",
        aplicaciones_o_redes_4: data["aplicaciones_o_redes"][3] || "",
        aplicaciones_o_redes_5: data["aplicaciones_o_redes"][4] || "",
        aplicaciones_o_redes_6: data["aplicaciones_o_redes"][5] || "",
        aplicaciones_o_redes_7: data["aplicaciones_o_redes"][6] || "",
        aplicaciones_o_redes_8: data["aplicaciones_o_redes"][7] || ""
      }
    ]
  });
}

export function sendForm(): void{

}