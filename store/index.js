import Vue from 'vue'
import Vuex from 'vuex'
import {isEmpty} from "../helpers"

Vue.use(Vuex)

const avatars = ['whatsapp', 'telegram-plane', 'slack-hash']

export default new Vuex.Store({
    state: {
        showBottom: false,
        channels: [
            {
                id: 1,
                name: "Team",
                avatar: avatars[0]
            },
            {
                id: 2,
                name: "Development",
                avatar: avatars[1]
            },
            {
                id: 3,
                name: "Trengo@support",
                avatar: avatars[2]
            },
            {
                id: 4,
                name: "(test) Netherlands",
                avatar: avatars[1]
            },
            {
                id: 5,
                name: "Nima Habibkhoda ",
                avatar: avatars[2]
            }
        ],
        oldItems: []
    },
    mutations: {
        toggleBottom(states, value) {
            states.showBottom = value
        },
        handleSearch(states, value) {
            if(isEmpty(value)) return false
            this.commit('getBackup', {channels: states.channels})
            this.commit('toggleBottom', true)

            const allChannels = [...states.oldItems]
            states.channels = allChannels.filter(channel =>
                channel.name.toLowerCase().indexOf(value?.toLowerCase()) > -1
            )
        },
        addChannel(states, channel) {
            if(isEmpty(channel)) return false
            this.commit('getBackup', {channels: states.channels})
            this.commit('toggleBottom', true)

            const randomId = Math.random().toString(36).substr(2, 9);
            const newObject = {
                id: randomId,
                name: channel,
                avatar: avatars[Math.floor(Math.random() * (2 + 1))]
            }

            states.channels = [...states.channels, newObject]
        },
        removeChannel(states, channel) {
            this.commit('getBackup', {channels: states.channels})
            this.commit('toggleBottom', true)

            const {channels} = states
            const newChannels = [...channels]
            const itemIndex = newChannels.findIndex(item => item.id === channel.id)
            states.channels = [
                ...newChannels.slice(0, itemIndex),
                ...newChannels.slice(itemIndex + 1)
            ]
        },
        reOrderList(states, value) {
            this.commit('getBackup', {channels: states.channels})
            //change values
            states.channels = value
        },
        restore(states) {
            //change to backup
            states.channels = states.oldItems
            this.commit('toggleBottom', false)
        },
        applyNewObjects(states) {
            //change to backup
            states.oldItems = []
            this.commit('toggleBottom', false)
        },
        getBackup(states, {channels, force}) {
            if (force) {
                console.log(channels)
                states.oldItems = channels
                return false
            }
            if (states.oldItems.length === 0) {
                states.oldItems = channels
            }
        },
    },
    actions: {
        fetchChannels({channels}) {
            return channels;
        }
    },
    getters: {}
})
