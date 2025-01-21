import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface PaintingsItem {
  authorId: number
  created: string
  id: number
  imageUrl: string
  locationId: number
  name: string
}

interface Params {
  q: string
  _limit: number
  _page: number
}

export const usePaintingsStore = defineStore('paintings', () => {
  const data = ref<PaintingsItem[]>()
  const isLoading = ref(false)
  const total = ref(0)

  const getData = async (params: Params) => {
    try {
      isLoading.value = true
      const response = await axios.get<PaintingsItem[]>('/api/paintings', { params })
      data.value = response.data
      total.value = +response.headers['x-total-count']
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  return { data, isLoading, getData, total }
})
