import axios from "axios"

export function fetchPhases() {
    return new Promise((resolve, reject) => {
        axios.get("http://localhost:4000/phases").then((res) => {
            resolve(res)
        }).catch((error) => {
            console.log(error)
            reject(error)
        })
    })


}

export function fetchPhase(id: string) {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:4000/phases/${id}`).then((res) => {
            resolve(res)
        }).catch((error) => {
            console.log(error)
            reject(error)
        })
    })
}