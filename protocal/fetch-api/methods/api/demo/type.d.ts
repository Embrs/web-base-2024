
interface GetDemoRes extends ResObject {
  data: {
    announcement_type_description: string;
    announcement_type_id: number;
  }[];
}
// -----------------------------------------------------------------------------------------------
interface QueryDemoParams {
  curr_page: string | number;
  announcement_type_id: string;
};

interface QueryDemoRes extends ResObject {
  data: {
    announcement_content: string;
    announcement_cover_path: string;
    announcement_id: number;
    announcement_is_top: boolean;
    announcement_preview_text: string;
    announcement_title: string;
    announcement_type_description: string;
    create_day: string;
    create_month: string;
    created_at: string;
  }[];
};
