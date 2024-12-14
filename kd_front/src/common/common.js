import level_zs from "@/assets/home/level_zs.png";
import level_hg from "@/assets/home/level_hg.png";
import level_ty from "@/assets/home/level_ty.png";
import level_pt from '@/assets/home/level_pt.png';
//获取会员等级
export function get_member_lvl(val) {
    const lvl_arr = ['Thành viên thường ','Thành viên vàng ','Thành viên bạch kim ','Thành viên MasonLanguage'];
    return lvl_arr[val * 1];
}

export function set_lvl(item) {
    if (item.point_level == 0) {
        item.icon = level_pt;
        item.img_len = 1;
    } else if (item.point_level < 4) {
        item.icon = level_zs;
        item.img_len = item.point_level;
    } else if (item.point_level >= 4 && item.point_level <= 6) {
        item.icon = level_hg;
        item.img_len = item.point_level - 3;
    } else {
        item.icon = level_ty;
        item.img_len = item.point_level - 6;
    }
    return item;
}
