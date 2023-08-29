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
                    v-for="contact in filterContacts"
                    :key="contact.id"
                    :class="contact.status"
                    @click="changeSelectedUser(contact.id)"
                  >
                    <img
                      :src="contact.avatar"
                      alt=""
                      class="avatar-sm rounded-circle mr-3"
                    />
                    <h6 class="">{{ contact.name }}</h6>
                  </div>
                </div>
              </vue-perfect-scrollbar>
            </div>
          </div>

          <!-- Columna de conversaciones -->
          <div class="chat-content-wrap sidebar-content">
            <div
              class="d-flex pl-3 pr-3 pt-2 pb-2 o-hidden box-shadow-1 chat-topbar"
            >
              <a class="link-icon d-md-none" @click="isMobile = !isMobile">
                <i class="icon-regular i-Right ml-0 mr-3"></i>
              </a>
              <div class="d-flex align-items-center">
                <img
                  :src="getSelectedUser.avatar"
                  alt=""
                  class="avatar-sm rounded-circle mr-2"
                />
                <p class="m-0 text-title text-16 flex-grow-1">
                  {{ getSelectedUser.name }}
                </p>
              </div>
            </div>
            <vue-perfect-scrollbar
              :settings="{ suppressScrollX: true, wheelPropagation: false }"
              class="chat-content perfect-scrollbar rtl-ps-none ps scroll"
            >
              <div>
                <div class="d-flex mb-30">
                  <div class="message flex-grow-1">
                    <div class="d-flex">
                      <p class="mb-1 text-title text-16 flex-grow-1">
                        {{ getSelectedUser.name }}
                      </p>
                      <span class="text-small text-muted">25 min ago</span>
                    </div>
                    <p class="m-0">
                      Do you ever find yourself falling into the “discount trap?
                    </p>
                  </div>
                  <img
                    :src="getSelectedUser.avatar"
                    alt=""
                    class="avatar-sm rounded-circle ml-3"
                  />
                </div>

                <div class="d-flex mb-30 user">
                  <img
                    src="@/assets/images/faces/1.jpg"
                    alt=""
                    class="avatar-sm rounded-circle mr-3"
                  />
                  <div class="message flex-grow-1">
                    <div class="d-flex">
                      <p class="mb-1 text-title text-16 flex-grow-1">Jhon Doe</p>
                      <span class="text-small text-muted">24 min ago</span>
                    </div>
                    <p class="m-0">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div class="d-flex mb-30">
                  <div class="message flex-grow-1">
                    <div class="d-flex">
                      <p class="mb-1 text-title text-16 flex-grow-1">
                        {{ getSelectedUser.name }}
                      </p>
                      <span class="text-small text-muted">25 min ago</span>
                    </div>
                    <p class="m-0">
                      Do you ever find yourself falling into the “discount trap?
                    </p>
                  </div>
                  <img
                    :src="getSelectedUser.avatar"
                    alt=""
                    class="avatar-sm rounded-circle ml-3"
                  />
                </div>
                <div class="d-flex mb-30 user">
                  <img
                    src="@/assets/images/faces/1.jpg"
                    alt=""
                    class="avatar-sm rounded-circle mr-3"
                  />
                  <div class="message flex-grow-1">
                    <div class="d-flex">
                      <p class="mb-1 text-title text-16 flex-grow-1">Jhon Doe</p>
                      <span class="text-small text-muted">24 min ago</span>
                    </div>
                    <p class="m-0">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            </vue-perfect-scrollbar>

            <div class="pl-3 pr-3 pt-3 pb-3 box-shadow-1 chat-input-area">
              <form class="inputForm">
                <div class="form-group">
                  <textarea
                    class="form-control form-control-rounded"
                    placeholder="Type your message"
                    name="message"
                    id="message"
                    cols="30"
                    rows="3"
                    spellcheck="false"
                  ></textarea>
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
              </form>
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

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Chat",
  },
  data() {
    return {
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
