<template>
          <v-row>
            <v-col cols="12">
              <v-sheet rounded color="secondary" dark class="pa-2"><h2>Painel Projetos</h2></v-sheet>
            </v-col>
            <v-col cols="12" class="ma-0 pa-0">
              <v-btn small text @click="showDetails = !showDetails"> <v-icon  class="mr-2" small>{{showArrow}}</v-icon> Detalhes</v-btn>
            </v-col>
            <v-col cols="12" sm="3">
              <v-card dark  color="primary lighten-1" class="text-center" hover to="/projects">
                <v-card-text><span class="headline white--text">{{total}}</span> <br> Total de Projetos
                </v-card-text>
                <v-divider class="mx-4"></v-divider>
                <v-card-text v-show="showDetails" class="text-left">
                  <v-row>
                    <v-col cols="4">
                      <small>Sistemas: </small><br>
                      <small>Infra:</small><br>
                      <small>Outros:</small>
                    </v-col>
                    <v-col cols="2">
                      <small>{{totalSistemas}}</small><br>
                      <small>{{totalInfra}}</small><br>
                      <small>{{totalOutros}}</small>
                    </v-col>
                    <v-col cols="4">
                      <small>Profisco: </small><br>
                      <small>Priori 3+:</small><br>
                      <small>Priori 3:</small>
                    </v-col>
                    <v-col cols="2">
                      <small>{{totalProfisco}}</small><br>
                      <small>{{totalPriorityMais}}</small><br>
                      <small>{{totalPriority}}</small>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="3">
              <v-card dark  color="success lighten-1" class="text-center" hover 
                        :to="{
                        name: 'projects',
                        params:{project: '/projects'},
                        query:{status: 3}  
                      }">
                <v-card-text><span class="headline white--text">{{concluded}}</span> <br> Concluído</v-card-text>
                <v-divider class="mx-4"></v-divider>
                <v-card-text v-show="showDetails" class="text-left">
                  <v-row>
                    <v-col cols="4">
                      <small>Sistemas:</small><br>
                      <small>Infra:</small><br>
                      <small>Outros:</small>
                    </v-col>
                    <v-col cols="2">
                      <small>{{concludedSistemas}}</small><br>
                      <small>{{concludedInfra}}</small><br>
                      <small>{{concludedOutros}}</small>
                    </v-col>
                    <v-col cols="4">
                      <small>Profisco:</small><br>
                      <small>Priori 3+:</small><br>
                      <small>Priori 3:</small>
                    </v-col>
                    <v-col cols="2">
                      <small>{{concludedProfisco}}</small><br>
                      <small>{{concludedPriorityMais}}</small><br>
                      <small>{{concludedPriority}}</small>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="3">
              <v-card dark  color="warning lighten-1" class="text-center" hover :to="{
                        name: 'projects',
                        params:{project: '/projects'},
                        query:{status: 2}  
                      }">
                <v-card-text><span class="headline white--text">{{current}}</span> <br> Em andamento</v-card-text>
                <v-divider class="mx-4"></v-divider>
                <v-card-text v-show="showDetails" class="text-left">
                  <v-row>
                    <v-col cols="4">
                      <small>Sistemas: </small><br>
                      <small>Infra:</small><br>
                      <small>Outros:</small>
                    </v-col>
                    <v-col cols="2">
                      <small>{{currentSistemas}}</small><br>
                      <small>{{currentInfra}}</small><br>
                      <small>{{currentOutros}}</small>
                    </v-col>
                    <v-col cols="4">
                      <small>Profisco: </small><br>
                      <small>Priori 3+: </small><br>
                      <small>Priori 3: </small>
                    </v-col>
                    <v-col cols="2">
                      <small>{{currentProfisco}}</small><br>
                      <small>{{currentPriorityMais}}</small><br>
                      <small>{{currentPriority}}</small>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="3">
              <v-card dark  color="error lighten-1" class="text-center" hover :to="{
                        name: 'projects',
                        params:{project: '/projects'},
                        query:{status: 1}  
                      }">
                <v-card-text><span class="headline white--text">{{notStart}}</span> <br>Não iniciados</v-card-text>
                <v-divider class="mx-4"></v-divider>
                <v-card-text v-show="showDetails" class="text-left">
                  <v-row>
                    <v-col cols="4">
                      <small>Sistemas:</small><br>
                      <small>Infra:</small><br>
                      <small>Outros:</small>
                    </v-col>
                    <v-col cols="2">
                      <small>{{notStartSistemas}}</small><br>
                      <small>{{notStartInfra}}</small><br>
                      <small>{{notStartOutros}}</small>
                    </v-col>
                    <v-col cols="4">
                      <small>Profisco:</small><br>
                      <small>Priori 3+: </small><br>
                      <small>Priori 3:</small>
                    </v-col>
                    <v-col cols="2">
                      <small>{{notStartProfisco}}</small><br>
                      <small>{{notStartPriorityMais}}</small><br>
                      <small>{{notStartPriority}}</small>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
</template>

<script>
export default {
  data(){
    return{
      showDetails: false,
    }
  },
  props:{
    projects: Array
  },
  computed:{
    showArrow(){
      return this.showDetails 
      ? 'mdi-chevron-down'
      : 'mdi-chevron-up'
    },
    concluded(){
      const total = this.projects.filter(el => el.status == "3")
      return total.length
    },
    total(){
      return this.projects.length
    },
    current(){
      const total = this.projects.filter(el => el.status == "2")
      return total.length
      
    },
    notStart(){
      const total = this.projects.filter(el => el.status == "1")
      return total.length
    },
    totalSistemas(){
      const total = this.projects.filter(el => el.type == "1")
      return total.length
    },
    totalInfra(){
      const total = this.projects.filter(el => el.type == "2")
      return total.length
    },
    totalOutros(){
      return this.total - this.totalSistemas - this.totalInfra
    },
    totalProfisco(){
      const total = this.projects.filter(el => el.profisco == true)
      return total.length
    },
    totalPriority(){
      const total = this.projects.filter(el => el.priority == "3")
      return total.length
    },
    totalPriorityMais(){
      const total = this.projects.filter(el => el.priority == "3+")
      return total.length
    },
    currentSistemas(){
      const total = this.projects.filter(el => el.status == 2 && el.type == "1")
      return total.length
    },
    currentInfra(){
      const total = this.projects.filter(el => el.status == 2 && el.type == "2")
      return total.length
    },
    currentOutros(){
      return this.current - this.currentSistemas - this.currentInfra
    },
    currentProfisco(){
      const total = this.projects.filter(el => el.status == 2 && el.profisco == true)
      return total.length
    },
    currentPriority(){
      const total = this.projects.filter(el => el.status == 2 && el.priority == "3")
      return total.length
    },
    currentPriorityMais(){
      const total = this.projects.filter(el => el.status == 2 && el.priority == "3+")
      return total.length
    },
    concludedSistemas(){
      const total = this.projects.filter(el => el.status == 3 && el.type == "1")
      return total.length
    },
    concludedInfra(){
      const total = this.projects.filter(el => el.status == 3 && el.type == "2")
      return total.length
    },
    concludedOutros(){
      return this.concluded - this.concludedSistemas - this.concludedInfra
    },
    concludedProfisco(){
      const total = this.projects.filter(el => el.status == 3 && el.profisco == true)
      return total.length
    },
    concludedPriority(){
      const total = this.projects.filter(el => el.status == 3 && el.priority == "3")
      return total.length
    },
    concludedPriorityMais(){
      const total = this.projects.filter(el => el.status == 3 && el.priority == "3+")
      return total.length
    },
    notStartSistemas(){
      const total = this.projects.filter(el => el.status == 1 && el.type == "1")
      return total.length
    },
    notStartInfra(){
      const total = this.projects.filter(el => el.status == 1 && el.type == "2")
      return total.length
    },
    notStartOutros(){
      return this.notStart - this.notStartSistemas - this.notStartInfra
    },
    notStartProfisco(){
      const total = this.projects.filter(el => el.status == 1 && el.profisco == true)
      return total.length
    },
    notStartPriority(){
      const total = this.projects.filter(el => el.status == 1 && el.priority == "3")
      return total.length
    },
    notStartPriorityMais(){
      const total = this.projects.filter(el => el.status == 1 && el.priority == "3+")
      return total.length
    },
  }
}
</script>