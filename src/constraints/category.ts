// Định nghĩa các thể loại
export enum Category {
    THOI_SU = "thoi-su",
    QUOC_TE = "quoc-te",
    LAO_DONG = "lao-dong",
    BAN_DOC = "ban-doc",
    KINH_TE = "kinh-te",
    SUC_KHOE = "suc-khoe",
    GIAO_DUC = "giao-duc-khoa-hoc",
    PHAP_LUAT = "phap-luat",
    VAN_HOA_VAN_NGHE = "van-hoa-van-nghe",
    GIAI_TRI = "giai-tri",
    NULL = ""
}

export const categoryName = {
    [Category.THOI_SU]: "Thời sự",
    [Category.QUOC_TE]: "Quốc tế",
    [Category.LAO_DONG]: "Lao động",
    [Category.KINH_TE]: " Kinh tế",
    [Category.BAN_DOC]: "Bạn đọc",
    [Category.SUC_KHOE]: "Sức khỏe",
    [Category.GIAO_DUC]: "Giáo dục",
    [Category.PHAP_LUAT]: "Pháp luật",
    [Category.VAN_HOA_VAN_NGHE]: "Văn hóa - Văn nghệ",
    [Category.GIAI_TRI]: "Giải trí",
    [Category.NULL]: ""
}