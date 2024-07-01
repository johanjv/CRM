<template>
    <section class="grid grid-cols-1 py-2">
        <div class="bg-white rounded px-2 py-2">

            <!-- <h1>Favorite Foods</h1>
            <draggable v-model="meals" tag="ul" group="meals">
                <template #item="{ element: meal }">
                <li>{{ meal }}</li>
                </template>
            </draggable>

            <h1>Terrible Foods</h1>
            <draggable v-model="yuckyMeals" tag="ul" group="meals">
                <template #item="{ element: meal }">
                <li>{{ meal }}</li>
                </template>
            </draggable> -->
        </div>
    </section>
</template>


<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import draggable from 'vuedraggable';
    import type { ProspectInterface } from '~/interfaces/ProspectInterface';

    onMounted(async () => {
        await nextTick();
        await getProspects();
    });

    const loadProspects = ref(false);

    const getProspects = async () => {
        loadProspects.value = true;
        const { data, error: fetchError } = await useAPI('/prospects', {
            method: 'get',
            default: () => ({}),
        });

        let { Prospects }: any = data.value;

        loadProspects.value = false;
    }

    const meals = ref([
    'Hamburger',
    'Pizza',
    'Spaghetti',
    'Tacos',
    'Teriyaki Chicken',
    ]);

    const yuckyMeals = ref([
        'Bat wing soup',
        'Spicy Octopus',
        'Anything from Taco Bell',
    ]);
</script>

<style scoped>

</style>
