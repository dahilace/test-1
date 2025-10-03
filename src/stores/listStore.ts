import { defineStore } from "pinia";
import type { ListData } from "@/assets/types/types";

export const useListStore = defineStore('list',
  {
    state: () => ({
      listData: [{ id: '1', login: 'aboba', password: '3228', type: 'local', marks: [{ text: '' }] }] as ListData[]
    }),
    actions: {
      getFromLocalStorage() {
        try {
          const arrAsString = localStorage.getItem('list-data')
          if (arrAsString) {
            this.listData = JSON.parse(arrAsString)
          }
        } catch {
          console.error('Ошибка сохраненных данных, провертье localStorage')
          // localStorage.setItem('list-data', '')
        }
      },
      saveToLocalStorage() {
        localStorage.setItem('list-data', JSON.stringify(this.listData.filter(el => el)))
      },
      deleteItem(id: string) {
        console.log(this.listData.splice(this.listData.findIndex(el => el.id === id), 1))
        // this.listData.slice(this.listData.findIndex(el => el.id === id), 1)
      }
    }
  }
)