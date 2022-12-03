<template>
  <div class="TableComponent">
    <el-table
      :data="TableData"
      style="width: 100%; height: 100%"
      :row-class-name="tableRowClassName"
      :header-cell-style="tableHeaderColor"
      @row-click="RowClickFun"
      :cell-style="TableCellStyle"
      >chargeMessage
      <el-table-column
        prop="chargeMessage"
        label="时间"
        show-overflow-tooltip
        align="center"
      >
        <template slot-scope="scope">
          <div class="chargeMessageDiv">
            {{ scope.row.chargeMessage }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="chargeUrl" label="名字" align="center">
        <template slot-scope="scope">
          <div class="chargeUrlDiv">
            {{ scope.row.chargeUrl }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="rate" label="速率" align="center">
        <template slot-scope="scope">
          <div class="rateDiv">
            {{ scope.row.rate }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="chargeType" label="类型" align="center">
        <template slot-scope="scope">
          <div class="chargeTypeDiv">
            {{ scope.row.chargeType }}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="点击" align="center" width="90">
        <template slot-scope="scope">
          <div class="SetLocationDivOutbox">
            <div
              class="SetLocationDiv iconfont icon-weizhi"
              @click.stop="DWFun(scope.row, scope.$index)"
              :class="
                ActiveIconStyleStatus && ActiveIconNowIndex == scope.$index
                  ? 'ActiveIconStyle'
                  : 'NormalIconStyle'
              "
            ></div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import debounce from "@/utils/debounce";
import Bus from "@/utils/bus.js";
import { mapGetters } from "vuex";
import AxiosUrl from "@/config/AxiosUrl";
import mixin from "@/pages/HomePage/mixin";
export default {
  name: "TableComponent",
  mixins: [mixin],
  props: ["TableData"],
  computed: {
    ...mapGetters({}),
  },
  data() {
    return {
      row: {},
      ActiveIconStyleStatus: false,
      ActiveIconNowIndex: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.row = this.TableData[0];
    });
  },
  methods: {
    // 修改table header的背景色
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return this.themeName == "default"
          ? "background-color: #102C51"
          : "background-color: #102C51";
      }
    },
    // 修改table row的背景色
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 0) {
        if (row.IsDispatch == 1) {
          return "DispatchRowStyle";
        }
        return "evenRowStyle";
      } else {
        if (row.IsDispatch == 1) {
          return "DispatchRowStyle";
        }
        return "oddRowStyle";
      }
    },
    RowClickFun(row, column, event) {
      console.log("row, column, event", row, column, event);
      debounce(() => {
        this.row = row;
        this.$store
          .dispatch("NewHomePageModule/ReqchargeMessageFun", row.chargeMessage)
          .then(() => {});
      }, 500);
    },

    TableCellStyle(row) {
      if (this.row === row.row) {
        return "background-color:#214F81;color: #ffffff !important;";
      } else {
        return "background-color:transparent;";
      }
    },

    DWFun(row, index) {
      debounce(() => {
        if (this.ActiveIconNowIndex == index) {
          this.ActiveIconStyleStatus = !this.ActiveIconStyleStatus;
          this.ActiveIconNowIndex = this.ActiveIconStyleStatus ? index : null;
        } else {
          this.ActiveIconNowIndex = index;
          this.ActiveIconStyleStatus = true;
        }

        if (this.ActiveIconStyleStatus) {
          console.log("%c可以执行", "color:green", row);
        } else {
          console.log("%c不可以执行", "color:red");
        }
      }, 500);
    },
  },
};
</script>
<style lang="scss">
.el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
  border-bottom: none;
}
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  content: "";
  position: absolute;
  background-color: transparent;
  z-index: 1;
}
.el-table,
.el-table__expanded-cell {
  background-color: transparent;
}
</style>
<style lang="scss" scoped>
.TableComponent {
  width: 100%;
  height: 100%;
  background: transparent;
  ::v-deep .el-table {
    width: 100%;
    height: 100% !important;
    tr {
      background-color: transparent;
    }
    .cell {
      line-height: 48px;
    }
    tbody tr:hover > td {
      background: inherit;
      cursor: pointer;
    }
    .el-table__header-wrapper {
      background: #102c51;
      th {
        font-size: 28px;
        font-family: Microsoft YaHei !important;
        font-weight: 500 !important;
        color: #fff;
      }
      .el-table__cell {
        height: 48px;
        padding: 0;
      }
    }
    .el-table__body-wrapper {
      background: transparent;
      height: calc(100% - 48px) !important;
      overflow-x: hidden;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        background-color: #07192f;
        background-color: transparent;
      }
      /*定义滚动条轨道 内阴影+圆角*/
      &::-webkit-scrollbar-track {
        //  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 2px;
        background-color: #07192f;
        background-color: transparent;
      }
      /*定义滑块 内阴影+圆角*/
      &::-webkit-scrollbar-thumb {
        border-radius: 20px;
        // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        background-color: #07192f;
        //background-color: transparent;
      }
      .el-table__row {
        .el-table__cell {
          height: 48px;
          font-size: 28px;
          font-family: Microsoft YaHei !important;
          font-weight: 400 !important;
          color: #fff;
          padding: 0;
        }
      }
    }
    .oddRowStyle {
      background: #102c51;
    }
    .evenRowStyle {
      background: transparent;
    }
    .DispatchRowStyle {
      background: red;
      div {
        color: #ffffff !important;
      }
    }
    .chargeMessageDiv {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .DepositionDivOutbox {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      .DepositionDiv {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 38px;
        border-radius: 4px;
      }
      .LH_activeColor {
        background: #0aa0de;
      }
      .QW_activeColor {
        background: #2fa652;
      }
      .ZD_activeColor {
        background: #de910a;
      }
      .YZ_activeColor {
        background: #cb563d;
      }
    }
    .PlanDivOutbox {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;

      .PlanDiv {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 38px;
        border-radius: 4px;
      }
      .activeColor {
        background-color: #da2f2f;
      }
    }
    .SetLocationDivOutbox {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;

      .SetLocationDiv {
        font-size: 28px;
      }
      .ActiveIconStyle {
        color: #00eaff;
      }
      .NormalIconStyle {
        color: #fff;
      }
    }
  }
}
</style>
