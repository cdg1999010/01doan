<template>
  <div class="data_info">
    <Header tit="Điền thông tin" color="1"></Header>
    <div class="user_data">
      <div class="input_bar box_shadow">
        <div class="item">
          <div class="label">Tên đầy đủ</div>
          <input type="text" v-model="data.real_name" :disabled="data.real_name ? true : false"
            placeholder="Hãy nhập tên thật của bạn " />
        </div>
        <div class="item">
          <div class="label">Số ID nhận diện</div>
          <input type="text" v-model="data.id_card_num" :disabled="dis" placeholder="Hãy nhập số nhận diện " />
        </div>
        <div class="item">
          <div class="label">Nghề nghiệp</div>
          <input type="text" v-model="data.company_name" :disabled="dis" placeholder="Mời vào" />
        </div>
        <div class="item">
          <div class="label">Chức vụ</div>
          <input type="text" v-model="data.job_position" :disabled="dis" placeholder="Mời vào" />
        </div>
        <div class="item">
          <div class="label">Thu nhập</div>
          <input type="number" v-model="data.salary" :disabled="dis" placeholder="Mời vào" />
        </div>
        <div class="item no_border">
          <div class="label">Số điện thoại</div>
          <input type="text" v-model="data.company_telnum" :disabled="dis"
            placeholder="Số điện thoại khác ( Nếu có )" />
        </div>
        <div class="item no_border word_year">
          <div class="label">Thâm niên</div>
          <input type="text" v-model="data.work_year" :disabled="dis" placeholder="Thời gian" />
          <div class="year">năm</div>
        </div>
 <!--       <div class="item no_border" @click="company_address">
          <div class="label">Đơn vị </div>
          <input type="text" v-model="data.company_address" disabled
            placeholder="Hãy chọn một tỉnh hoặc một thành phố" />
          <div class="next">
            <img src="@/assets/my/ic_next_gray.png" alt />
          </div>
        </div> -->
        <div class="item no_border">
          <div class="label">Địa chỉ chi tiết </div>
          <input type="text" v-model="data.detail_address" :disabled="dis" placeholder="Nơi làm việc" />
        </div>
<!--        <div class="item no_border" @click="now_address">
          <div class="label">Địa chỉ nhà</div>
          <input type="text" v-model="data.now_address" disabled placeholder="Mời vào" />
          <div class="next">
            <img src="@/assets/my/ic_next_gray.png" alt />
          </div>
        </div> -->
        <div class="item no_border">
          <div class="label">Địa chỉ chi tiết </div>
          <input type="text" v-model="data.now_detail_address" :disabled="dis"
            placeholder="Nơi thường trú" />
        </div>
      </div>
      <div class="input_bar box_shadow">
        <div class="head">Thông tin người thân</div>
        <div class="item">
          <div class="label">Tên đầy đủ</div>
          <input type="text" v-model="data.direct_relatives_name" :disabled="dis"
            placeholder="Nhập họ tên người thân của bạn" />
        </div>
        <div class="item">
          <div class="label">Số điện thoại</div>
          <input type="text" v-model="data.direct_relatives_mobile" :disabled="dis"
            placeholder="Hãy nhập số điện thoại di động" />
        </div>
        <div class="item" @click="direct_relationship">
          <div class="label">Quan hệ</div>
          <input type="text" v-model="data.direct_relationship" disabled placeholder="Hãy chọn một mối quan hệ" />
          <div class="next">
            <img src="@/assets/my/ic_next_gray.png" alt />
          </div>
        </div>
      </div>
      <BigBtn label="Xác nhận" class="submit_data"></BigBtn>
    </div>
  </div>
</template>
<script>
  import Header from "../public/header";
  import BigBtn from "../public/button";
  import {
    province,
    direct_relationship
  } from "@/common/data";
  export default {
    components: {
      Header,
      BigBtn
    },
    data() {
      return {
        data: {},
        picker: null,
        picker2: null,
        dis: false
      };
    },
    mounted() {
      this.get_data();
    },
    beforeDestroy() {
      if (this.picker) {
        this.picker.hide();
        this.picker.dispose();
      }
      if (this.picker2) {
        this.picker2.hide();
        this.picker2.dispose();
      }
    },
    methods: {
      get_data() {
        this.$get(this.$path.member_info_detail).then(res => {
          if (res.success) {
            this.data = res.data;
            if (this.data.company_telnum) this.dis = true;
          }
        });
      },
      company_address() {
        if (this.dis) return;
        this.picker = new mui.PopPicker({
          buttons: ['hủy', 'xác định'],
          layer: 3
        });
        const ind = this.set_index(this.data.company_address);
        this.picker.setData(province);
        this.picker.pickers[0].setSelectedIndex(ind.index1);
        this.picker.pickers[1].setSelectedIndex(ind.index2);
        this.picker.pickers[2].setSelectedIndex(ind.index3);
        this.picker.show(SelectedItem => {
          this.data.company_address =
            SelectedItem[0].text +
            " " +
            SelectedItem[1].text +
            " " +
            SelectedItem[2].text;
        });
      },
      now_address() {
        if (this.dis) return;
        this.picker2 = new mui.PopPicker({
          buttons: ['hủy', 'xác định'],
          layer: 3
        });
        const ind = this.set_index(this.data.now_address);
        this.picker2.setData(province);
        this.picker2.pickers[0].setSelectedIndex(ind.index1);
        this.picker2.pickers[1].setSelectedIndex(ind.index2);
        this.picker2.pickers[2].setSelectedIndex(ind.index3);
        const t = this;
        this.picker2.show(function(SelectedItem) {
          t.data.now_address =
            SelectedItem[0].text +
            " " +
            SelectedItem[1].text +
            " " +
            SelectedItem[2].text;
        });
      },
      set_index(data) {
        let index1 = 0;
        let index2 = 0;
        let index3 = 0;
        if (data) {
          data = data.split(" ");
          for (const a in province) {
            if (data[0] == province[a].text) {
              index1 = a;
              for (const b in province[a].children) {
                if (data[1] == province[a].children[b].text) {
                  index2 = b;
                  for (const c in province[a].children[b]
                      .children) {
                    if (
                      data[2] ==
                      province[a].children[b].children[c].text
                    ) {
                      index3 = c;
                    }
                  }
                }
              }
            }
          }
        }
        return {
          index1: index1,
          index2: index2,
          index3: index3
        };
      },
      direct_relationship() {
        if (this.dis) return;
        let picker = new mui.PopPicker({
          buttons: ['hủy', 'xác định'],
          layer: 1
        });
        let index = 0;
        for (const i in direct_relationship) {
          if (
            direct_relationship[i].value ==
            this.data.direct_relationship
          ) {
            index = i;
          }
        }
        picker.pickers[0].setSelectedIndex(index);
        picker.setData(direct_relationship);
        picker.show(SelectedItem => {
          this.data.direct_relationship = SelectedItem[0].value;
        });
      },
      click_BigBtn() {
        this.$post(this.$path.basicInfo, this.data).then(res => {
          if (res.success) {
            this.$alert("Lưu thành công!");
            this.$router.go(-1);
          }
        });
      }
    }
  };
</script>
<style lang="scss" scoped>
  .data_info {
    padding-left: 0;
    padding-right: 0;

    .user_data {
      padding: 0.3rem;
      width: 100%;
      background-image: linear-gradient(to bottom, #f9bf3a, #ffffff, #ffffff);

      .input_bar {
        padding-left: 0.3rem;
        background: #ffffff;
        border-radius: 0.16rem;

        .head {
          width: 6.9rem;
          height: 0.8rem;
          line-height: 0.8rem;
          text-align: center;
          background: #f6f9fd;
          color: #738aa4;
          margin-left: -0.3rem;
        }

        .item {
          width: 100%;
          height: 1.16rem;
          border-bottom: 1px #e5e5e5 solid;

          .label {
            width: 2.6rem;
            //overflow: hidden;
            height: 100%;
            line-height: 1.16rem;
            font-size: 0.32rem;
            float: left;
          }

          input {
            float: left;
            margin-left: 0.2rem;
            width: 3rem;
            height: 100%;
          }

          .next {
            width: 0.56rem;
            height: 100%;
            float: right;

            img {
              margin-top: 0.45rem;
              width: 0.26rem;
              height: 0.26rem;
              margin-right: 0.3rem;
            }
          }
        }

        .no_border {
          border: none;
        }

        .word_year {
          input {
            width: 2rem;
          }

          .year {
            height: 1.16rem;
            line-height: 1.16rem;
            float: left;
            font-size: 0.32rem;
          }
        }
      }

      .input_bar:nth-child(2) {
        margin-top: 0.3rem;
      }

      .submit_data {
        margin: 0.6rem 0;
      }
    }
  }
</style>
