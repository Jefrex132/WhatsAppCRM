<template>
  <div class="no-gutters">
    <!-- <breadcumb :page="'Chat'" :folder="'apps'" /> -->
    <div class="row no-gutters">
      <div class="col-md-9">
        <div class="card chat-sidebar-container sidebar-container">
          <!-- Columna de contactos y conversaciones activas o entrantes -->
          <div class="chat-sidebar-wrap sidebar" :class="{ 'ml-0': isMobile }">
            <div class="border-right">
              <div
                class="pt-2 pb-2 pl-3 pr-3 d-flex align-items-center o-hidden box-shadow-1 chat-topbar"
              >
                <a class="link-icon d-md-none" @click="isMobile = !isMobile">
                  <i class="icon-regular ml-0 mr-3 i-Left"></i>
                </a>
                <div class="form-group m-0 flex-grow-1">
                  <input
                    type="text"
                    class="form-control form-control-rounded"
                    id="search"
                    v-model="search"
                    placeholder="Search contacts"
                  />
                </div>
              </div>

              <vue-perfect-scrollbar
                :settings="{ suppressScrollX: true, wheelPropagation: false }"
                class="contacts-scrollable perfect-scrollbar  rtl-ps-none ps scroll"
              >
                <div>
                  <div
                    class="mt-4 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom"
                  >
                    Recent
                  </div>
                  <div
                    class="p-3 d-flex border-bottom align-items-center contact"
                    v-for="contact in getRecentUser"
                    :key="contact.name"
                    :class="contact.status"
                  >
                    <img
                      :src="contact.avatar"
                      alt=""
                      class="avatar-sm rounded-circle mr-3"
                    />
                    <h6 class="">{{ contact.name }}</h6>
                  </div>

                  <div
                    class="mt-3 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom"
                  >
                    Contactos
                  </div>
                  <div
                    class="p-3 d-flex border-bottom align-items-center contact"
                    v-for="activeConversation in activeConversations"
                    :key="activeConversation"
                    :class="'online'"
                    @click="changeCurrentActiveConversation(activeConversation.activeConversationID)"
                  >
                    <i class="i-Male"></i>
                    <!-- <img
                      :src="activeConversation.avatar"
                      alt=""
                      class="avatar-sm rounded-circle mr-3"
                    /> -->
                    <h6 class="">{{ activeConversation.recipientProfileName }} {{activeConversation.recipientPhoneNumber}}</h6>
                  </div>
                </div>
              </vue-perfect-scrollbar>
            </div>
          </div>

          <!-- Barra Superior -->
          <div class="chat-content-wrap sidebar-content">
            <div
              class="d-flex pl-3 pr-3 pt-2 pb-2 o-hidden box-shadow-1 chat-topbar"
            >
              <a class="link-icon d-md-none" @click="isMobile = !isMobile">
                <i class="icon-regular i-Right ml-0 mr-3"></i>
              </a>
              <div class="d-flex align-items-center">
                <!-- <img
                  :src="getSelectedUser.avatar"
                  alt=""
                  class="avatar-sm rounded-circle mr-2"
                /> -->
                <i class="i-Male"></i>
                <p class="m-0 text-title text-16 flex-grow-1">
                  {{ currentActiveConversation.recipientProfileName }} {{currentActiveConversation.recipientPhoneNumber}}
                </p>
              </div>
            </div>

            <!-- Barra Conversación -->
            <vue-perfect-scrollbar ref="scrollRef"
              :settings="{ suppressScrollX: true, wheelPropagation: false }"
              class="chat-content perfect-scrollbar rtl-ps-none ps scroll"
            >
              <div v-for="cuurentActiveConversationMessage in currentActiveConversation.messages" :key="cuurentActiveConversationMessage">
                <div class="d-flex mb-30" :class="GetOwner(cuurentActiveConversationMessage.owner)" >
                  <div :style="getColorChat(cuurentActiveConversationMessage.owner)" class="message flex-grow-1">
                    <div class="d-flex">
                      <p class="m-0" style="margin-left: 0; margin-right:auto;" v-if="cuurentActiveConversationMessage.owner != 'agent'">
                        {{cuurentActiveConversationMessage.messageContent}}
                      </p>
                      <span v-if="cuurentActiveConversationMessage.owner == 'agent'" style="margin-left: 0; margin-right:auto;" class="text-small text-muted">{{cuurentActiveConversationMessage.messageSentHour}}</span>
                      <span v-else style="margin-left: auto; margin-right:0;" class="text-small text-muted">{{cuurentActiveConversationMessage.messageReceivedHour}}</span>
                      <p class="m-0" style="margin-left: auto; margin-right:0;" v-if="cuurentActiveConversationMessage.owner == 'agent'">
                        {{cuurentActiveConversationMessage.messageContent}}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </vue-perfect-scrollbar>
            <div class="pl-3 pr-3 pt-3 pb-3 box-shadow-1 chat-input-area">
                <div class="form-group">
                  <b-form-input
                    class="form-control form-control-rounded"
                    placeholder="Type your message"
                    @keyup.enter="sendNewTextMessage()"
                    v-model="newTextMessageContent"
                  />
                </div>
                
                <div class="d-flex">
                  <button @click="vistaItems = 'Productos'" class="btn btn-icon btn-rounded btn-primary mr-2">
                    <i class="i-Shopping-Cart"></i>
                    Productos
                  </button>
                  <button @click="vistaItems = 'Orden'" class="btn btn-icon btn-rounded btn-primary mr-2">
                    <i class="i-Check"></i>
                    Crear Orden
                  </button>
                  <div class="flex-grow-1"></div>
                  <button class="btn btn-icon btn-rounded btn-primary mr-2">
                    <i class="i-Paper-Plane"></i>
                  </button>
                  <button
                    class="btn btn-icon btn-rounded btn-outline-primary"
                    type="button"
                  >
                    <i class="i-Add-File"></i>
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3 scrollable-container">
          <b-card v-if="vistaItems == 'Productos'" >
            <b-row class="">
              <h3 class="ul-widget__head-title">
                Productos
              </h3>
              <b-form-select
                v-model="Localidad"
                required
                style="width:40%"
                placeholder="Selecciona una Sucursal"
              >
                <option value="Cartago">Cartago</option>
                <option value="Zapote">Zapote</option>
                <option value="Escazu">Escazú</option>
                <option value="Heredia">Heredia</option>
                <option value="Bodega">Bodega</option>
              </b-form-select>
              <span v-if="loading == true" class="spinner-glow spinner-glow-secondary mr-5 mb-4"></span>
                <b-form-input
                  @keyup="selectProductos()" @change="buscarProducto()" 
                  v-model="producto"
                  id="buscador" 
                  type="text"
                  required
                  placeholder="Buscar Producto"
                  :class="{'loading-effect': loading}"
                ></b-form-input>
                
            </b-row>
            <div class="ul-widget__body">
              <div class="ul-widget1" v-for="producto in productos" :key="producto.codigoProducto">
                <div class="ul-widget__item ul-widget4__users">
                  <div class="ul-widget4__img">
                    <img :src="producto.localizacion" :alt="producto.descripcion" />
                  </div>
                  <div class="ul-widget2__info ul-widget4__users-info">
                    <a href="#" variant="info" @click="AgregarItem(producto,'info')" class="ul-widget2__title">{{ producto.descripcion }}</a>
                    <span class="ul-widget2__username">{{ producto.codigoProducto }}</span>
                    
                  <span class="ul-widget4__number text-success">₡{{ producto.precioVenta }}</span>
                  </div>
                </div>
              </div>
            </div>
          </b-card>
          <b-card>
            <b-row class="">
                <b-form-input
                  v-model="producto"
                  type="text"
                  required
                  placeholder="Nombre"
                ></b-form-input>
                <vue-good-table
                  :columns="columns"
                  styleClass="tableOne vgt-table"
                  :rows="orden"
                  style="width:100%"
                >
                  <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'cantidad'">
                      <b-form-input
                        v-model="props.row.cantidad"
                        type="text"
                        required
                        onfocus="this.select();"
                        placeholder="Nombre"
                      ></b-form-input>
                    </span>
                  </template>
                </vue-good-table>
            </b-row>
          </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from 'axios';
const constants = require('@../../../src/constants.js'); 
const webSocket = new WebSocket('ws:'+constants.routes.websocketAPI+'?agentID=1');

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Chat",
  },
  data() {
    return {
      // Variables del chat -------
      activeConversation: '',
      activeConversations: [],
      activeConversationsAsJSON: {},
      currentActiveConversation: {},
      updatedActiveConversationID: '',
      
      newTextMessageContent: '',

      createNewConversationDialog: false,
      newConversationRecipientPhoneNumber: '',
      newConversationTextMessageContent: '',

      emojis: [],

      recordAudioDialog: false,
      isRecording: false,
      recordedTime: '0:00',
      mediaRecorder: null,
      recordedAudioFile: null,
      startTime: '',
      chunks: [],

      file: null,
      // Esta aqui variables del chat -------
      recentContacts: [],
      search: "",
      isMobile: false,
      Localidad: "",
      producto:"",
      productos:[],
      loading:false,
      timeouts: [],
      orden: [],
      vistaItems: 'Productos',
      columns: [
        {
          label: "Items ",
          field: "descripcion",
          width: "200px",
          thClass: "gull-th-class"
        },
        {
          label: "Cant",
          field: "cantidad",
          width: "60px",
        },
        {
          label: "Price",
          field: "precioVenta",
          type: "number",
        },
      ],
    };
  },

  methods: {
    getColorChat(item){
      if(item == 'agent'){
        return "background-color:#d6ffb6";
      } else
      {
        return "background-color:#dedede";
      }

    },
    GetOwner(item){
      if(item != 'agent'){
        return "user";
      } 
    },
    sendNewTextMessage(){
      axios.get(constants.routes.backendAPI
                +'/sendWhatsappMessage?'
                +'type=text'
                +'&recipientPhoneNumber='+this.currentActiveConversation.recipientPhoneNumber
                +'&messageContent='+this.newTextMessageContent)
      .then(() =>{ 
        this.currentActiveConversation.messages[(Object.keys(this.currentActiveConversation.messages).length+1).toString()]={owner:'agent',messageContent:this.newTextMessageContent,messageType:'text',messageSentHour: Date().toString().slice(16,24)};
        this.newTextMessageContent = '';
        this.$nextTick(() => {
        if (this.$refs.scrollRef) {
            const psContainer = this.$refs.scrollRef.$el;
            psContainer.scrollTop = psContainer.scrollHeight;
          }
        });
      })
      
      .catch(error =>{
        console.log(error);
      })
      
    },
    getAgentActiveConversations(){
      axios.get(constants.routes.backendAPI+'/getAgentActiveConversations?agentID='+localStorage.getItem('agentID'))
      .then(response =>{
        this.activeConversations = [];
        this.activeConversationsAsJSON = {};
        for (var activeConversationID in response.data){
          var activeConversation = response.data[activeConversationID];
          activeConversation['activeConversationID'] = activeConversationID;
          activeConversation['active'] = false;
          this.activeConversations.push(activeConversation);
          this.activeConversation = this.activeConversations[0].activeConversationID;
        }
        this.activeConversationsAsJSON = response.data;
        if (this.updatedActiveConversationID != ''){
          this.changeCurrentActiveConversation(this.updatedActiveConversationID);
        } console.log(this.activeConversationsAsJSON)
      })
      .catch(error =>{
        console.log(error);
      })
    },
    changeCurrentActiveConversation (clickedActiveConversationID){
      console.log(clickedActiveConversationID)
      this.currentActiveConversation = this.activeConversationsAsJSON[clickedActiveConversationID];
      this.$nextTick(() => {
        if (this.$refs.scrollRef) {
            const psContainer = this.$refs.scrollRef.$el;
            psContainer.scrollTop = psContainer.scrollHeight;
          }
        });
      
    },
    ...mapActions(["changeSelectedUser"]),
    AgregarItem(item,variant = null){
      this.orden.push({
        descripcion: item.descripcion,
        cantidad: 1,
        precioVenta: item.precioVenta,
        });
      this.$bvToast.toast("Producto Enviado a cliente y cargado con éxito a la orden", {
        title: `${item.descripcion || "Cargado con éxito "}`,
        variant: variant,
        solid: true
      });
    },
    selectProductos(){
      let me=this;
      let Objeto = [];
      let myInput = document.getElementById('buscador');
      myInput = myInput.value;
      let cant = myInput.length;
      if ( cant > 2 ) {
        var search_term = myInput;
        
        this.timeouts.map( timeout => {
          window.clearTimeout( timeout );
        } );
        this.timeouts.push(
          setTimeout( () => {
            this.loading = true;
            axios.get('https://noah.cr/BackendKingVape/api/Productos/BuscadorEnter2/King Vape/'+myInput).then( response => {
              Objeto = response.data
                // Cargar Productos 
                me.productos= Objeto;
                me.loading = false;
              } )
              .catch( error => { } );
          }, 500 )
        );
      } else {
        this.timeouts.map( timeout => {
          window.clearTimeout( timeout );
        } );
        this.productos = [];
      }
    },
  },

  computed: {
    ...mapGetters([
      "getContactLists",
      "getRecentUser",
      "getCurrentUser",
      "getSelectedUser",
    ]),

    filterContacts() {
      return this.getContactLists.filter((contact) => {
        return contact.name.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
  mounted(){
    localStorage.setItem("agentID","1");
    this.emojis = constants.emojis;
    this.getAgentActiveConversations();

    webSocket.onmessage = (websocketMessage) => {
      const websocketMessageJSON = JSON.parse(websocketMessage.data);
      if (websocketMessageJSON['agentID'] == localStorage.getItem('agentID')){
        this.$set(this.activeConversationsAsJSON[websocketMessageJSON['conversationID']].messages, websocketMessageJSON['messageID'], websocketMessageJSON['messageInformation']);

        
        this.$nextTick(() => {
        if (this.$refs.scrollRef) {
            const psContainer = this.$refs.scrollRef.$el;
            psContainer.scrollTop = psContainer.scrollHeight;
          }
        });
        var inboxAudio = new Audio(require('../../../assets/pageAssets/inbox.mp3'));
        inboxAudio.play();
      }
    }
  },
  created: function() {
    // console.log(this.getSelectedUser);
    // this.getCurrentUser.forEach(currentUser => {
    //   currentUser.chatInfo.forEach(user => {
    //     this.getContactLists.filter(contact => {
    //       if (user.contactId == contact.id) {
    //         this.recentContacts.push(contact);
    //       }
    //     });
    //   });
    // });
  },
};
</script>

<style>
  .scrollable-container {
    max-height: 80vh; /* 80% de la altura del viewport */
    overflow-y: auto; /* permite el desplazamiento vertical cuando sea necesario */
  }
  .loading-effect::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10;
      background: repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 10px,
          #ddd 10px,
          #ddd 20px
      );
      animation: loading 1s infinite;
  }

  @keyframes loading {
      0% {
          background-position: 0 0;
      }
      100% {
          background-position: 50px 50px;
      }
  }

</style>
