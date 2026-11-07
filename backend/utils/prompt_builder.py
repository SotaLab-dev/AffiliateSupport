class PromptBuilder:
    @staticmethod
    def create(work):

        return f"""
以下の作品情報からX向け投稿文を作成してください。

条件
- 80文字以内
- ハッシュタグは2個まで
- 自然な文章
- 宣伝感が強すぎない

作品名:
{work["title"]}

女優:
{work["actress"]}

ジャンル:
{work["genres"]}

メーカー:
{work["maker"]}
"""
