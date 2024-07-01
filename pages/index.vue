<template>
    <section class=" rounded-b">
        <div class="grid grid-cols-2 gap-5 py-2">
            <div class="bg-white rounded justify-center">
                <ClientOnly>
                    <apexchart
                        v-if="!loadProspects"
                        :key="series"
                        height="400"
                        width="100%"
                        :options="options"
                        :series="series"
                    ></apexchart>
                    <ThemeComponentsLoadingPage v-else />
                </ClientOnly>
            </div>
            <div class="bg-white rounded justify-center">
                <ClientOnly>
                    <apexchart
                        v-if="!loadProspects"
                        :key="series"
                        height="400"
                        width="100%"
                        :options="options"
                        :series="series"
                    ></apexchart>
                    <ThemeComponentsLoadingPage v-else />
                </ClientOnly>
            </div>
        </div>
        <PageComponentsModalNewClient v-if="showModal" @refresh-prospects="getProspects"/>
    </section>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
    import { useAppStore } from '@/store/app'
import type { ProspectInterface } from '~/interfaces/ProspectInterface';

    onMounted(async () => {
        await nextTick();
        await getProspects();
    });

    const { showModal } = storeToRefs(useAppStore());   
    const loadProspects = ref(false);

    const options = ref({
        chart: {
            type: "bar",
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                borderRadiusApplication: "around",
            },
        },
        xaxis: {
            categories: ['New', 'Proposal', 'Negotiation', 'Need Analysis', 'Closed Won', 'Closed Lost']
        },
        title: {
          text: 'Opportunity count by Stage',
          floating: false,
          offsetY: 10,
          align: 'center',
          style: {
            color: '#444'
          }
        }
    });

    const series = ref([
        {
            name: "amount",
            data: [],
        },
    ]);

    const getProspects = async () => {

        loadProspects.value = true;
        const { data, error: fetchError } = await useAPI('/prospects', {
            method: 'get',
            default: () => ({}),
        });

        let { Prospects }: any = data.value;
        
        let countNews           = Prospects.filter((prospect: ProspectInterface) => prospect.stage == '66816853c5111375d1a5d8de')
        let countNegotiation    = Prospects.filter((prospect: ProspectInterface) => prospect.stage == '66816853c5111375d1a5d8e1')
        let countProposal       = Prospects.filter((prospect: ProspectInterface) => prospect.stage == '66816853c5111375d1a5d8e0')
        let countNeedAnalysis   = Prospects.filter((prospect: ProspectInterface) => prospect.stage == '66816853c5111375d1a5d8e2')
        let countCloseWon       = Prospects.filter((prospect: ProspectInterface) => prospect.stage == '66816853c5111375d1a5d8e3')
        let countCloseLost      = Prospects.filter((prospect: ProspectInterface) => prospect.stage == '66816853c5111375d1a5d8e4')
        
        series.value[0].data = [countNews.length, countNegotiation.length, countProposal.length, countNeedAnalysis.length, countCloseWon.length, countCloseLost.length]
        
        loadProspects.value = false;
    }

</script>