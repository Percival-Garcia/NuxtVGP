import { ref, computed } from 'vue'

export default function useLaunchFilter(launches: any[]) {
  const selectedYear = ref<string | null>(null)

  const filteredLaunches = computed(() => {
    if (!selectedYear.value) return launches
    return launches.filter(launch =>
      new Date(launch.launch_date_utc).getFullYear().toString() === selectedYear.value
    )
  })

  const setYear = (year: string | null) => {
    selectedYear.value = year
  }

  return {
    filteredLaunches,
    selectedYear,
    setYear
  }
}
